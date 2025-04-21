import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { getBlogs } from "@/lib/blog";
import { getBulkBlogViews } from "@/lib/viewTracker";
import { Calendar } from "lucide-react";
import ViewCounter from "@/components/ViewCounter";

export const metadata: Metadata = {
  title: "My Blog - All blogs",
  description: "Read my thoughts on web development, technology, and more.",
  openGraph: {
    title: "My Blog - All blogs",
    description: "Read my thoughts on web development, technology, and more.",
    type: "website",
  },
};

const BLUR_FADE_DELAY = 0.04;

async function Blogs() {
  // get blogs
  const blogs = await getBlogs();
  const slugs = blogs.map((blog) => blog.slug);
  // get views for each blog
  const viewsMap = await getBulkBlogViews(slugs);
  return (
    <div className="w-full px-4 py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="text-lg font-bold">
          I write about technologies & my learning
        </h1>
      </BlurFade>
      {/* blogs list */}
      <div className="flex flex-col gap-2 mt-4">
        {blogs.map((blog, index: number) => (
          <BlurFade
            delay={BLUR_FADE_DELAY * 3 + 0.05 * index}
            key={blog.slug}
            inView
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="flex flex-col gap-1 hover:bg-accent/60 p-4 border-2 rounded-lg">
                <div className="w-full flex flex-wrap items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold">{blog.title}</h2>
                    <p className="">{blog.description}</p>
                  </div>
                  {/* date & views */}
                  <div className="w-full flex items-center lg:items-end gap-2 lg:gap-0 lg:w-auto lg:flex-col">
                    <span className="flex items-center gap-1">
                      <Calendar size={15} />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <ViewCounter
                      slug={blog.slug}
                      initialViews={viewsMap[blog.slug] || 0}
                      trackView={false}
                    />
                  </div>
                </div>
                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent px-2 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
