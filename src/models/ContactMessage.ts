import mongoose, { Schema, Model } from "mongoose";

import { ContactMessageType } from "@/server/utils/types";

const ContactMessageSchema = new Schema<ContactMessageType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

const ContactMessage: Model<ContactMessageType> =
  mongoose.models.ContactMessage || mongoose.model( "ContactMessage", ContactMessageSchema );

export default ContactMessage;