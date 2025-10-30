"use client";

import React, { useState } from "react";

// app/contact/page.tsx
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white/30 rounded-3xl p-4 ounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 ">Contact Me</h1>
        {submitted ? (
          <p className="text-black">
            Thanks for reaching out! I’ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md p-2"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
