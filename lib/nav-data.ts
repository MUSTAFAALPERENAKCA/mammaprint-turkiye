/**
 * Tek doğruluk kaynağı: docs/requirements-matrix.md §6.1 (nav) ve §3.1 (URL'ler).
 * Header (masaüstü mega menü) ve mobil navigasyon bu veriyi paylaşır.
 */
export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  links: NavLink[];
}

export const primaryNav: NavSection[] = [
  {
    label: "Testler",
    href: "/testler",
    links: [
      { label: "MammaPrint", href: "/mammaprint" },
      { label: "BluePrint", href: "/blueprint" },
      { label: "MammaPrint + BluePrint", href: "/mammaprint-blueprint" },
      { label: "Genomik Test Nedir?", href: "/genomik-test-nedir" },
      { label: "Genomik ve Genetik Test Farkı", href: "/genomik-test-genetik-test-farki" },
    ],
  },
  {
    label: "Hastalar İçin",
    href: "/hastalar-icin",
    links: [
      { label: "Kimler İçin Uygun?", href: "/hastalar-icin/kimler-icin-uygun" },
      { label: "Test Nasıl Yapılır?", href: "/hastalar-icin/test-nasil-yapilir" },
      { label: "Sonuçları Anlamak", href: "/hastalar-icin/sonuclari-anlamak" },
      { label: "Doktorla Konuşma Rehberi", href: "/hastalar-icin/doktorla-konusma-rehberi" },
      { label: "Sık Sorulan Sorular", href: "/hastalar-icin/sik-sorulan-sorular" },
    ],
  },
  {
    label: "Sağlık Profesyonelleri",
    href: "/saglik-profesyonelleri",
    links: [
      { label: "Klinik Uygunluk", href: "/saglik-profesyonelleri/klinik-uygunluk" },
      { label: "Numune ve Lojistik", href: "/saglik-profesyonelleri/numune-ve-lojistik" },
      { label: "Örnek Raporlar", href: "/saglik-profesyonelleri/ornek-raporlar" },
      { label: "Test Talep Süreci", href: "/saglik-profesyonelleri/test-talebi" },
      { label: "Medikal Bilgi Talebi", href: "/saglik-profesyonelleri/medikal-bilgi" },
    ],
  },
  {
    label: "Bilimsel Kanıt",
    href: "/klinik-kanit",
    links: [
      { label: "MINDACT", href: "/klinik-kanit/mindact" },
      { label: "NBRST", href: "/klinik-kanit/nbrst" },
      { label: "STO-3", href: "/klinik-kanit/sto-3" },
      { label: "NSABP B-42", href: "/klinik-kanit/nsabp-b42" },
      { label: "Yayınlar", href: "/yayinlar" },
      { label: "Kılavuzlar", href: "/kilavuzlar" },
    ],
  },
  {
    label: "Bilgi Merkezi",
    href: "/bilgi-merkezi",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Terimler Sözlüğü", href: "/sozluk" },
      { label: "Videolar", href: "/videolar" },
      { label: "İndirilebilir Kaynaklar", href: "/kaynaklar" },
    ],
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
    links: [
      { label: "MammaPrint Türkiye", href: "/hakkimizda" },
      { label: "Agendia", href: "/agendia" },
      { label: "Omnigen", href: "/omnigen" },
      { label: "Kalite ve Uyum", href: "/kalite-ve-uyum" },
    ],
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "KVKK Aydınlatma Metni", href: "/gizlilik" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { label: "Tıbbi Bilgilendirme", href: "/tibbi-bilgilendirme" },
];
