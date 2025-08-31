import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { getBlogs } from "@/lib/blog";
import { Calendar } from "lucide-react";
import ViewCounter from "@/components/ViewCounter";

import { BLUR_FADE_DELAY } from "@/constants";

export const metadata: Metadata = {
  title: "My Blog - All blogs",
  description: "Read my thoughts on web development, technology, and more.",
  openGraph: {
    title: "My Blog - All blogs",
    description: "Read my thoughts on web development, technology, and more.",
    type: "website",
  },
};

async function Blogs() {
  // get blogs
  const blogs = await getBlogs();
  return (
    <div className="py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="text-lg font-bold">
          I write about technologies & my learning
        </h1>
      </BlurFade>
      {/* blogs list */}
      <div className="mt-4 flex flex-col gap-2 lg:py-4">
        {blogs.map((blog, index: number) => (
          <BlurFade
            delay={BLUR_FADE_DELAY * 3 + 0.05 * index}
            key={blog.slug}
            inView
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="hover:bg-accent/60 flex flex-col gap-1 rounded-lg border-2 p-4">
                <div className="flex w-full flex-wrap items-start justify-between">
                  <div className="md:max-w-[75%]">
                    <h2 className="text-xl font-bold">{blog.title}</h2>
                    <p>{blog.description}</p>
                  </div>
                  {/* date & views */}
                  <div className="flex w-full items-center gap-2 lg:w-auto lg:flex-col lg:items-end lg:gap-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={15} />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <ViewCounter slug={blog.slug} trackView={false} />
                  </div>
                </div>
                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent rounded-md px-2 py-1 text-sm"
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
