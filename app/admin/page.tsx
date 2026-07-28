import { db } from "@/lib/db";

export default async function AdminDashboardPage() {
  const [draftCount, pendingMedicalReview, publishedCount] = await Promise.all([
    db.page.count({ where: { status: "draft" } }),
    db.blogPost.count({ where: { status: "medical_review" } }),
    db.page.count({ where: { status: "published" } }),
  ]);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-card border border-border bg-surface p-4 shadow-card">
        <p className="text-sm text-text-muted">Taslak sayfalar</p>
        <p className="text-2xl font-semibold">{draftCount}</p>
      </div>
      <div className="rounded-card border border-border bg-surface p-4 shadow-card">
        <p className="text-sm text-text-muted">Medikal inceleme bekleyen blog yazıları</p>
        <p className="text-2xl font-semibold">{pendingMedicalReview}</p>
      </div>
      <div className="rounded-card border border-border bg-surface p-4 shadow-card">
        <p className="text-sm text-text-muted">Yayındaki sayfalar</p>
        <p className="text-2xl font-semibold">{publishedCount}</p>
      </div>
    </div>
  );
}
