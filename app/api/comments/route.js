import Comment from "@/assets/models/comment";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    if (request.headers.get("content-type").startsWith("application/json")) {
      // Parse the request body as JSON
      const body = await request.json();
      const name = body.name
      const comment = body.comment
      const postId = body.postId
      console.log(body.name);
      await Comment.create({content:comment,postId,author:name})
    } else {
      // Parse the request body as form data
      const formData = await request.formData();
      const { name, comment,postId } = Object.fromEntries(formData.entries());
      await Comment.create({content:comment,postId,author:name})
    }
    // await Comment.create({content:'some content',postId:1})

    // Return a response
    return new NextResponse('some test');
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new NextResponse("Error parsing request body", { status: 400 });
  }
}


export async function GET(request) {
  try {
    const urlSearchParams = new URLSearchParams(request.url.split('?')[1]);
    const postId = urlSearchParams.get('postId');

    if (!postId) {
      return new NextResponse("postId parameter is missing", { status: 400 });
    }
    const comments = await Comment.findAll({ where: { postId } });

    // Return the fetched comments
    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    console.error("Error fetching comments:", error);
    return new NextResponse("Error fetching comments", { status: 500 });
  }
}
