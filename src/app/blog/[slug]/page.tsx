import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getBlogs, getBlog } from "@/lib/blog";
import { getBlogViews } from "@/lib/viewTracker";
import ViewCounter from "@/components/ViewCounter";

// generate metadate for each blog
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "The requested blog blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      tags: blog.tags,
      images: blog.image ? [{ url: blog.image }] : [],
    },
  };
}

// generate static params of each blog
export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((blog) => ({
    slug: blog.slug,
  }));
}

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    notFound();
  }

  // get blog views
  const viewCount = await getBlogViews((await params).slug);

  return (
    <div className="w-full px-4 py-5 lg:py-4">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <time>{new Date(blog.date).toLocaleDateString()}</time>
        <span className="mx-2">•</span>
        <ViewCounter slug={blog.slug} initialViews={viewCount} />
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <MDXRemote source={blog.content} />
      </div>

      <div className="mt-8 pt-4 border-t">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
