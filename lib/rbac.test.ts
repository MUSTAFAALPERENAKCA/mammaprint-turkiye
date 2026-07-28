import { describe, expect, it } from "vitest";
import { hasPermission } from "@/lib/rbac";

describe("hasPermission", () => {
  it("only allows publisher/super_admin to publish content", () => {
    expect(hasPermission("publisher", "content:publish")).toBe(true);
    expect(hasPermission("super_admin", "content:publish")).toBe(true);
    expect(hasPermission("content_editor", "content:publish")).toBe(false);
    expect(hasPermission("medical_reviewer", "content:publish")).toBe(false);
  });

  it("only allows medical_reviewer/super_admin to perform medical review", () => {
    expect(hasPermission("medical_reviewer", "content:medical_review")).toBe(true);
    expect(hasPermission("seo_editor", "content:medical_review")).toBe(false);
  });

  it("only allows system_admin/super_admin to manage users", () => {
    expect(hasPermission("system_admin", "system:manage_users")).toBe(true);
    expect(hasPermission("publisher", "system:manage_users")).toBe(false);
  });
});
