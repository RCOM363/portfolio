import { NextRequest, NextResponse } from "next/server";
import { getBlogViews, incrementBlogViews } from "@/lib/viewTracker";

/**
 * GET /views/:slug
 * Gets views of a blog post
 * @param slug
 * @returns views
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = await getBlogViews(slug);
  return NextResponse.json({ views });
}

/**
 * POST views/:slug
 * Increments the view on a blog post by 1 & returns the updated views
 * @param slug
 * @returns views
 */
export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = await incrementBlogViews(slug);
  return NextResponse.json({ views });
}
