-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('draft', 'editorial_review', 'medical_review', 'seo_review', 'approved', 'scheduled', 'published', 'archived');

-- CreateEnum
CREATE TYPE "TargetAudience" AS ENUM ('patient', 'hcp', 'general');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('super_admin', 'content_editor', 'medical_reviewer', 'seo_editor', 'publisher', 'system_admin');

-- CreateEnum
CREATE TYPE "FormType" AS ENUM ('general', 'hcp', 'corporate');

-- CreateEnum
CREATE TYPE "PersonRole" AS ENUM ('author', 'medical_reviewer', 'both');

-- CreateEnum
CREATE TYPE "RelatedTest" AS ENUM ('mammaprint', 'blueprint', 'both');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "targetAudience" "TargetAudience" NOT NULL DEFAULT 'general',
    "seoTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "canonicalUrl" TEXT NOT NULL,
    "ogImage" TEXT,
    "h1" TEXT NOT NULL,
    "schemaType" TEXT NOT NULL DEFAULT 'WebPage',
    "hero" JSONB,
    "sections" JSONB,
    "primaryCta" JSONB,
    "secondaryCta" JSONB,
    "references" JSONB,
    "relatedContentIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "noindex" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "medicalReviewerId" TEXT,
    "publishedAt" TIMESTAMP(3),
    "scheduledPublishAt" TIMESTAMP(3),
    "scheduledReviewAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_posts" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "targetAudience" "TargetAudience" NOT NULL DEFAULT 'general',
    "seoTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "canonicalUrl" TEXT NOT NULL,
    "ogImage" TEXT,
    "h1" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "featuredImage" TEXT,
    "featuredImageAlt" TEXT,
    "body" JSONB NOT NULL,
    "tableOfContents" JSONB,
    "readingTimeMinutes" INTEGER,
    "references" JSONB,
    "relatedContentIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "noindex" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" TEXT NOT NULL,
    "tagIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "authorId" TEXT,
    "medicalReviewerId" TEXT,
    "publishedAt" TIMESTAMP(3),
    "scheduledPublishAt" TIMESTAMP(3),
    "scheduledReviewAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_categories" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "blog_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinical_studies" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "seoTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "canonicalUrl" TEXT NOT NULL,
    "h1" TEXT NOT NULL,
    "studyName" TEXT NOT NULL,
    "studyDesign" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "patientPopulation" TEXT NOT NULL,
    "primaryEndpoint" TEXT NOT NULL,
    "followUpDuration" TEXT NOT NULL,
    "finding" TEXT NOT NULL,
    "clinicalImplication" TEXT NOT NULL,
    "limitations" TEXT NOT NULL,
    "sourceCitation" TEXT NOT NULL,
    "lastMedicalReviewDate" TIMESTAMP(3),
    "relatedContentIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "noindex" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clinical_studies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publications" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "citation" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "topic" TEXT NOT NULL,
    "relatedTest" "RelatedTest" NOT NULL,
    "type" TEXT NOT NULL,
    "doiOrPubmedUrl" TEXT,
    "summary" TEXT NOT NULL,
    "noindex" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resources" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "title" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'tr',
    "fileUrl" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "targetAudience" "TargetAudience" NOT NULL DEFAULT 'general',
    "fileSizeBytes" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "noindex" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faqs" (
    "id" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "question" TEXT NOT NULL,
    "shortAnswer" TEXT NOT NULL,
    "longAnswer" TEXT,
    "targetAudience" "TargetAudience" NOT NULL DEFAULT 'general',
    "relatedPageIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "schemaEligible" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "glossary_terms" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "term" TEXT NOT NULL,
    "simpleDefinition" TEXT NOT NULL,
    "technicalDefinition" TEXT NOT NULL,
    "relatedTermIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "glossary_terms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "expertise" TEXT,
    "bio" TEXT,
    "role" "PersonRole" NOT NULL,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "relationshipDescription" TEXT NOT NULL,
    "logo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "redirects" (
    "id" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "destinationUrl" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL DEFAULT 301,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "redirects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_submissions" (
    "id" TEXT NOT NULL,
    "formType" "FormType" NOT NULL,
    "name" TEXT NOT NULL,
    "contactValue" TEXT NOT NULL,
    "userType" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "consentGiven" BOOLEAN NOT NULL,
    "consentTimestamp" TIMESTAMP(3) NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_revisions" (
    "id" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "snapshot" JSONB NOT NULL,
    "changeSummary" TEXT,
    "editedById" TEXT,
    "editedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_revisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT,
    "entityId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pages_slug_key" ON "pages"("slug");

-- CreateIndex
CREATE INDEX "pages_status_idx" ON "pages"("status");

-- CreateIndex
CREATE INDEX "pages_targetAudience_idx" ON "pages"("targetAudience");

-- CreateIndex
CREATE UNIQUE INDEX "blog_posts_slug_key" ON "blog_posts"("slug");

-- CreateIndex
CREATE INDEX "blog_posts_status_idx" ON "blog_posts"("status");

-- CreateIndex
CREATE INDEX "blog_posts_categoryId_idx" ON "blog_posts"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "blog_categories_slug_key" ON "blog_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "clinical_studies_slug_key" ON "clinical_studies"("slug");

-- CreateIndex
CREATE INDEX "clinical_studies_status_idx" ON "clinical_studies"("status");

-- CreateIndex
CREATE UNIQUE INDEX "publications_slug_key" ON "publications"("slug");

-- CreateIndex
CREATE INDEX "publications_status_idx" ON "publications"("status");

-- CreateIndex
CREATE INDEX "publications_relatedTest_idx" ON "publications"("relatedTest");

-- CreateIndex
CREATE UNIQUE INDEX "resources_slug_key" ON "resources"("slug");

-- CreateIndex
CREATE INDEX "resources_status_idx" ON "resources"("status");

-- CreateIndex
CREATE INDEX "faqs_status_idx" ON "faqs"("status");

-- CreateIndex
CREATE UNIQUE INDEX "glossary_terms_slug_key" ON "glossary_terms"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "people_slug_key" ON "people"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_slug_key" ON "organizations"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "redirects_sourceUrl_key" ON "redirects"("sourceUrl");

-- CreateIndex
CREATE INDEX "form_submissions_formType_idx" ON "form_submissions"("formType");

-- CreateIndex
CREATE INDEX "content_revisions_entityType_entityId_idx" ON "content_revisions"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "audit_logs_userId_idx" ON "audit_logs"("userId");

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "audit_logs"("createdAt");

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_medicalReviewerId_fkey" FOREIGN KEY ("medicalReviewerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "blog_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_medicalReviewerId_fkey" FOREIGN KEY ("medicalReviewerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_revisions" ADD CONSTRAINT "content_revisions_editedById_fkey" FOREIGN KEY ("editedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
