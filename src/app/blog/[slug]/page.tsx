import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { MoveLeft, Calendar } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { getBlogs, getBlog } from "@/lib/blog";
import ViewCounter from "@/components/ViewCounter";
import { ShareButton } from "@/components/ShareButton";

import { BLUR_FADE_DELAY } from "@/constants";

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

// Configure options for MDXRemote
const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrettyCode], // syntax higlighting
  },
};

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="py-5 lg:py-4">
      <div className="flex flex-col">
        {/* ------ Back link ------ */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Link
            href={"/blog"}
            className="hover:text-primary flex items-center gap-1 py-2 text-gray-600 transition-colors"
          >
            <MoveLeft />
            Back to blog
          </Link>
        </BlurFade>
        {/* ------ Title ------ */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h1 className="mb-2 text-4xl font-bold">{blog.title}</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          {/* ------ Date & views ------ */}
          <div className="flex flex-col justify-between sm:flex-row">
            <p className="text-gray-600">By Rahul Lankeppanavar</p>
            <div className="flex items-center gap-2 text-gray-600">
              {/* ------ Date ------ */}
              <span className="flex items-center gap-1">
                <Calendar size={15} />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {/* ------ Views ------ */}
              <ViewCounter slug={blog.slug} />
              {/* ------ Share ------ */}
              <ShareButton />
            </div>
          </div>
        </BlurFade>
        {/* ------ Tags ------ */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="w-full border-b pt-4 pb-4">
            <ul className="flex list-none flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-accent rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      </div>
      {/* ------ Blog content ------ */}
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <article className="prose dark:prose-invert w-full py-8">
          <MDXRemote source={blog.content} options={options} />
        </article>
      </BlurFade>
    </section>
  );
}

export default Blog;
