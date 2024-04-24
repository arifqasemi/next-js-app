import { NextResponse } from "next/server";
import POSTS from "@/assets/models/post";

export async function POST(request) {
    if (request.headers.get("content-type").startsWith("application/json")) {
        // Parse the request body as JSON
        const body = await request.json();
        const postId = body.postId
        const post = await POSTS.findByPk(postId)
        const responseBody = JSON.stringify(post, null, 2); 
        return new NextResponse(responseBody);
      } else {
        // Parse the request body as form data
        const formData = await request.formData();
        const { postId} = Object.fromEntries(formData.entries());
        const post = await POSTS.findByPk(postId)
        const responseBody = JSON.stringify(post, null, 2); 
        return new NextResponse(responseBody);
      }
   return new NextResponse('this is the response from detail postId')
  }

  