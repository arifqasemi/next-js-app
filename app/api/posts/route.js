import Comment from "@/assets/models/comment";
import { NextResponse } from "next/server";
import POSTS from "@/assets/models/post";

export async function POST(request) {
  try {
    if (request.headers.get("content-type").startsWith("application/json")) {
      // Parse the request body as JSON
      const body = await request.json();
      console.log(body.title);
    } else {
      // Parse the request body as form data
      const formData = await request.formData();
      const { title, description ,slug,image} = Object.fromEntries(formData.entries());
      await POSTS.create({title,description,slug,image}).then((result) =>{
        console.log(result)
        return Response('data is added');
      }).catch((error)=>{
        console.log('error',error)
        return Response('data is not added');

      })
    }

    // Return a response
    // return new NextResponse('some test');
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new NextResponse("Error parsing request body", { status: 400 });
  }
}

export async function GET() {
  try {
    const posts = await POSTS.findAll();

    const responseData = {
      message: "Success",
      data: posts, 
    };

    const responseBody = JSON.stringify(responseData, null, 2); 

    return new NextResponse(responseBody);
  } catch (error) {
    console.error("Error fetching posts:", error);
    
    return new NextResponse(JSON.stringify({ message: "Error fetching posts" }), { status: 500 });
  }
}