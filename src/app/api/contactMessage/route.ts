import { NextResponse } from "next/server";

import connectDB from "@/server/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";
import { type ContactMessageType } from "@/server/utils/types";

export async function POST( req: Request ) {
  try {
    await connectDB();

    const body: ContactMessageType = await req.json();

    const contactMessage = new ContactMessage( body );
    await contactMessage.save();

    return NextResponse.json( { success: true, id: contactMessage._id } );
  } catch ( error: unknown ) {
    console.error( "Error saving contact message:", error );
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const contactMessages = await ContactMessage.find().sort( { createdAt: -1 } );
    return NextResponse.json( { success: true, data: contactMessages } );
  } catch ( error: unknown ) {
    console.error( "Error fetching contact messages:", error );
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}