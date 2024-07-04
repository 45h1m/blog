import { NextResponse } from 'next/server'
import { getAllBlogMeta } from "@/components/functions";

type BlogMeta = {
  title: string;
  realSlug: string;
  tags: string[];
};

export async function GET() {
  const blogs: any = await getAllBlogMeta();
  const resp = blogs.map((b: BlogMeta) => ({
    title: b.title,
    realSlug: b.realSlug,
    tags: b.tags
  }));

  return NextResponse.json(resp);
}
