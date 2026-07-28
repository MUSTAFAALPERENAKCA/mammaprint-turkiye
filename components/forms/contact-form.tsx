"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const userTypeLabelByForm: Record<"general" | "hcp" | "corporate", string> = {
  general: "Kullanıcı tipi (isteğe bağlı)",
  hcp: "Unvan / Kurum",
  corporate: "Kurum adı",
};

export function ContactForm({ formType }: { formType: "general" | "hcp" | "corporate" }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-card border border-success/30 bg-success/5 p-6 text-center">
        <p className="font-semibold text-success">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="formType" value={formType} />

      {state.status === "error" && state.message ? (
        <p role="alert" className="rounded-input border border-danger/30 bg-danger/5 px-3 py-2 text-sm text-danger">
          {state.message}
        </p>
      ) : null}

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          required
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          className="w-full rounded-input border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />
        {state.fieldErrors?.name ? (
          <p id="name-error" className="mt-1 text-xs text-danger">{state.fieldErrors.name}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contactValue" className="mb-1 block text-sm font-medium">
          E-posta veya telefon
        </label>
        <input
          id="contactValue"
          name="contactValue"
          required
          aria-invalid={Boolean(state.fieldErrors?.contactValue)}
          className="w-full rounded-input border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />
        {state.fieldErrors?.contactValue ? (
          <p className="mt-1 text-xs text-danger">{state.fieldErrors.contactValue}</p>
        ) : null}
      </div>

      {formType !== "general" ? (
        <div>
          <label htmlFor="userType" className="mb-1 block text-sm font-medium">
            {userTypeLabelByForm[formType]}
          </label>
          <input id="userType" name="userType" className="w-full rounded-input border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring" />
        </div>
      ) : null}

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium">
          Konu
        </label>
        <input
          id="subject"
          name="subject"
          required
          aria-invalid={Boolean(state.fieldErrors?.subject)}
          className="w-full rounded-input border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />
        {state.fieldErrors?.subject ? (
          <p className="mt-1 text-xs text-danger">{state.fieldErrors.subject}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          className="w-full rounded-input border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring"
        />
        {state.fieldErrors?.message ? (
          <p className="mt-1 text-xs text-danger">{state.fieldErrors.message}</p>
        ) : null}
        <p className="mt-1 text-xs text-warning">
          Lütfen hasta adı, TC kimlik numarası, rapor veya genetik/sağlık verisi paylaşmayın.
        </p>
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consentGiven"
          name="consentGiven"
          type="checkbox"
          required
          className="mt-1"
          aria-invalid={Boolean(state.fieldErrors?.consentGiven)}
        />
        <label htmlFor="consentGiven" className="text-sm text-text-muted">
          <a href="/gizlilik" className="underline">
            KVKK Aydınlatma Metni
          </a>
          &apos;ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum.
        </label>
      </div>
      {state.fieldErrors?.consentGiven ? (
        <p className="text-xs text-danger">{state.fieldErrors.consentGiven}</p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-button bg-primary-900 px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
      >
        {isPending ? "Gönderiliyor…" : "Gönder"}
      </button>
    </form>
  );
}
