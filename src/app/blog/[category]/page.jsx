"use client";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import BlogContent from "@/components/blog/BlogContent";
import { getCategoryIdFromSlug } from "@/lib/categorySlugs";

function BlogCategoryPage() {
  const params = useParams();
  const slug = params.category;
  const categoryId = getCategoryIdFromSlug(slug);

  return <BlogContent initialCategory={categoryId} />;
}

export default function BlogCategory() {
  return (
    <Suspense fallback={<div className="loading">Memuat...</div>}>
      <BlogCategoryPage />
    </Suspense>
  );
}
