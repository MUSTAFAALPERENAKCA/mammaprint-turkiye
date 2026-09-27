/**
 * Site kapsamı mammaprintturkiye.com'un gerçek canlı yapısıyla sınırlıdır:
 * Ana sayfa, /mammaprint, /blueprint ve temel yasal/iletişim sayfaları.
 */
export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "MammaPrint", href: "/mammaprint" },
  { label: "BluePrint", href: "/blueprint" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "KVKK Aydınlatma Metni", href: "/gizlilik" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
];
