import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST() {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const order = await instance.orders.create({
    amount: 99 * 100,
    currency: "INR",
    receipt: "#SUPER-BROSKI",
  });

  return NextResponse.json(order);
}
