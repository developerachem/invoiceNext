import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Invoice } from "../../../../models/invoice";

export async function GET() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await Invoice.find();

  console.log(data);

  return NextResponse.json({ invoices: data });
}

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const payload = await req.json();

  const invoicesData = await new Invoice(payload).save();

  return NextResponse.json({
    message: "Data Create Success",
    data: invoicesData,
  });
}
