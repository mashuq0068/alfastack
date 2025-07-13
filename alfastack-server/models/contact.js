import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: false },
  jobTitle: { type: String, required: false },
  phone: { type: String, required: false },
  companySize: { type: String, required: false },
  industry: { type: String, required: false },
  challenge: { type: String, required: false },
  timeline: { type: String, required: false },
  details: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);
