import POST from "@/assets/models/post";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
      const urlSearchParams = new URLSearchParams(request.url.split('?')[1]);
      const slug = urlSearchParams.get('slug');
  
      if (!slug) {
        return new NextResponse("postId parameter is missing", { status: 400 });
      }
      const posts = await POST.findAll({ where: { slug } });
  
      // Return the fetched posts
      return new NextResponse(JSON.stringify(posts));
    } catch (error) {
      console.error("Error fetching post:", error);
      return new NextResponse("Error fetching post", { status: 500 });
    }
  }