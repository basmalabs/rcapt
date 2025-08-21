import mongoose, { Schema, Model } from "mongoose";

import { AppointmentType } from "@/mytypes/server";

const AppointmentSchema = new Schema<AppointmentType>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    preferredContact: { type: String, enum: [ "Email", "Phone" ], required: true },
    returningPatient: { type: Boolean, required: true },
    appointmentDate: { type: Date, required: true },
    dateFlexibility: { type: Boolean, required: true },
    timeOfDay: {
      type: String,
      enum: [ "Morning", "Lunch", "Afternoon", "Evening", "Anytime" ],
      required: true
    },
    appointmentTime: { type: Date, default: null },
    notes: { type: String, default: null },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

const Appointment: Model<AppointmentType> =
  mongoose.models.Appointment || mongoose.model( "Appointment", AppointmentSchema );

export default Appointment;
