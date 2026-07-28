"use server";

import { headers } from "next/headers";
import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validation/contact";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const rateLimit = checkRateLimit(`contact:${ip}`);
  if (!rateLimit.allowed) {
    return {
      status: "error",
      message: "Çok fazla deneme yaptınız. Lütfen birkaç dakika sonra tekrar deneyin.",
    };
  }

  const raw = {
    formType: formData.get("formType"),
    name: formData.get("name"),
    contactValue: formData.get("contactValue"),
    userType: formData.get("userType") || undefined,
    subject: formData.get("subject"),
    message: formData.get("message"),
    consentGiven: formData.get("consentGiven") === "on",
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Lütfen formdaki hataları düzeltin.",
      fieldErrors,
    };
  }

  await db.formSubmission.create({
    data: {
      formType: parsed.data.formType,
      name: parsed.data.name,
      contactValue: parsed.data.contactValue,
      userType: parsed.data.userType,
      subject: parsed.data.subject,
      message: parsed.data.message,
      consentGiven: parsed.data.consentGiven,
      consentTimestamp: new Date(),
    },
  });

  return {
    status: "success",
    message: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
  };
}
