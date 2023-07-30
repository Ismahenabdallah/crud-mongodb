import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    // Check if title and description are provided
    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required fields" }, { status: 400 });
    }

    await connectMongoDB();

    // Create the Todo
    await Topic.create({ title, description });

    return NextResponse.json({ message: "Todo Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create Todo" }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
