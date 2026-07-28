import { z } from "zod";

/**
 * Gereksinim M-12/M-13: sağlık/genetik veri alanı istenmez; mesaj alanında
 * uyarı gösterilir. Bkz. docs/requirements-matrix.md §7.
 */
export const contactFormSchema = z.object({
  formType: z.enum(["general", "hcp", "corporate"]),
  name: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalı").max(100),
  contactValue: z
    .string()
    .trim()
    .min(5, "Geçerli bir e-posta veya telefon numarası girin")
    .max(100),
  userType: z.string().trim().max(100).optional(),
  subject: z.string().trim().min(3, "Konu en az 3 karakter olmalı").max(150),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalı").max(2000),
  consentGiven: z.literal(true, {
    error: "KVKK aydınlatma metnini onaylamanız gerekir",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
