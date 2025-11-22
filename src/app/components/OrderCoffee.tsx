"use client";
import Script from "next/script";
import { useState } from "react";
import axios from "axios";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

export default function OrderCoffee() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      const { data: order } = await axios.post("/api/create-order");
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Buy me a Coffee",
        description: "SUPPORT GENRIFY ",
        order_id: order.id,

        method: { upi: true },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Payment failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-pink text-white"
      >
        {loading ? "Processing..." : "Buy for ₹99"}
      </button>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    </>
  );
}
