"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BlogContent from "@/components/blog/BlogContent";

function BlogPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || null;

  return <BlogContent initialCategory={category} />;
}

export default function Blog() {
  return (
    <Suspense fallback={<div className="loading">Memuat...</div>}>
      <BlogPage />
    </Suspense>
  );
}
