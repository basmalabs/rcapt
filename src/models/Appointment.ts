import mongoose, { Schema, Document, Model } from "mongoose";

export interface AppointmentType extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "Email" | "Phone";
  returningPatient: boolean;
  appointmentDate: Date;
  dateFlexibility: boolean;
  timeOfDay: "Morning" | "Lunch" | "Afternoon" | "Evening" | "Anytime";
  appointmentTime?: Date | null;
  notes?: string | null;
  createdAt: Date;
}

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
