import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { getBlogs } from "@/lib/blog";

import { BLUR_FADE_DELAY } from "@/constants";
import { CalendarDaysIcon } from "@/components/ui/calendar-days";

export const metadata: Metadata = {
  title: "My Blog - All blogs",
  description: "Concepts, curiosities, & unfinished thoughts.",
  openGraph: {
    title: "My Blog - All blogs",
    description: "Concepts, curiosities, & unfinished thoughts.",
    type: "website",
  },
};

async function Blogs() {
  /* ------ get blogs ------ */
  const blogs = await getBlogs();
  return (
    <section className="py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="text-lg font-bold">
          Concepts, curiosities, & unfinished thoughts.
        </h1>
      </BlurFade>
      {/* ------ Blogs list ------ */}
      <ul className="mt-4 flex list-none flex-col gap-2 lg:py-4">
        {blogs.map((blog, index: number) => (
          <BlurFade
            delay={BLUR_FADE_DELAY * 3 + 0.05 * index}
            key={blog.slug}
            inView
          >
            <li>
              <Link
                href={`/blog/${blog.slug}`}
                aria-labelledby={`blog-title-${blog.slug}`}
              >
                <article className="hover:bg-accent/60 flex flex-col gap-1 rounded-lg border-2 p-4">
                  <div className="flex w-full flex-wrap items-start justify-between">
                    <div className="md:max-w-[75%]">
                      <h2 className="text-xl font-bold">{blog.title}</h2>
                      <p>{blog.description}</p>
                    </div>
                    {/* ------ Date ------ */}
                    <span className="flex items-center gap-1">
                      <CalendarDaysIcon size={15} />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {/* ------ Tags ------ */}
                  <ul className="flex list-none flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-accent rounded-md px-2 py-1 text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Link>
            </li>
          </BlurFade>
        ))}
      </ul>
    </section>
  );
}

export default Blogs;
