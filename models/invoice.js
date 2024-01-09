import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  { timestamps: true }
);

export const Invoice =
  mongoose.models.invoices || mongoose.model("invoices", invoiceSchema);
