import { describe, expect, it } from "vitest";
import { slugify } from "@/lib/slug";

describe("slugify", () => {
  it("converts Turkish characters consistently", () => {
    expect(slugify("Genomik Test Nedir?")).toBe("genomik-test-nedir");
    expect(slugify("Çerez Politikası")).toBe("cerez-politikasi");
    expect(slugify("Sağlık Profesyonelleri İçin")).toBe("saglik-profesyonelleri-icin");
  });

  it("collapses repeated separators and trims edges", () => {
    expect(slugify("  MammaPrint -- Blueprint  ")).toBe("mammaprint-blueprint");
  });

  it("handles empty input", () => {
    expect(slugify("")).toBe("");
  });
});
