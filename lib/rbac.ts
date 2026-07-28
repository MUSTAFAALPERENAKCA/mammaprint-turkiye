import type { UserRole } from "@prisma/client";

/**
 * Yetki matrisi kaynağı: docs/content-model.md §4.
 * Bu tablo tek doğruluk kaynağıdır (single source of truth) — admin UI ve
 * server-side guard'lar (örn. yayın engelleme) bu fonksiyonlardan okur.
 */
export type Permission =
  | "content:create_draft"
  | "content:publish"
  | "content:medical_review"
  | "content:edit_seo"
  | "system:manage_users";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  content_editor: ["content:create_draft"],
  seo_editor: ["content:edit_seo"],
  medical_reviewer: ["content:medical_review"],
  publisher: ["content:publish"],
  system_admin: ["system:manage_users"],
  super_admin: [
    "content:create_draft",
    "content:publish",
    "content:medical_review",
    "content:edit_seo",
    "system:manage_users",
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
