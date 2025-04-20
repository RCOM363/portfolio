import { NextRequest, NextResponse } from "next/server";
import { getBlogViews, incrementBlogViews } from "@/lib/viewTracker";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = await getBlogViews(slug);
  return NextResponse.json({ views });
}

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = await incrementBlogViews(slug);
  return NextResponse.json({ views });
}
