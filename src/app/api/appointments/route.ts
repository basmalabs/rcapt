import { NextResponse } from "next/server";

import connectDB from "@/server/lib/mongodb";
import Appointment from "@/models/Appointment";
import { type AppointmentType } from "@/mytypes/server";

export async function POST( req: Request ) {
  try {
    await connectDB();

    const body: AppointmentType = await req.json();

    const appointment = new Appointment( body );
    await appointment.save();

    return NextResponse.json( { success: true, id: appointment._id } );
  } catch ( error: unknown ) {
    console.error( "Error saving appointment:", error );
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const appointments = await Appointment.find().sort( { createdAt: -1 } );
    return NextResponse.json( { success: true, data: appointments } );
  } catch ( error: unknown ) {
    console.error( "Error fetching appointments:", error );
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}