"use client";
import { Googly } from "@/components/googlead";
import { Bell, User, Mail } from "lucide-react"; // Importing User and Mail icons
import { useState } from "react";
import { MouseEvent } from "react";

const Page = () => {
  const [namey, setNamey] = useState("");
  const [emaily, setEmaily] = useState("");
  const [messagey, setMessagey] = useState("");

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const payload = { namey, emaily, messagey };
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Server replied:", data);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col mt-5 border-2 border-black w-100 p-5 rounded-3xl">
          {/* Name Section with User Icon */}
          <div className="flex mb-4 items-center group">
            <User
              className="mr-1 
           
                transition-transform duration-300
                text-gray-500
                group-focus-within:rotate-45
              "
              size={28} // Adjust icon size
            />
            <label htmlFor="Name" className="w-25 mr-2 text-xl font-">
              Name:
            </label>

            <input
              className="rounded-2xl outline-3 pl-4 w-70 text-xl"
              type="text"
              id="Name"
              placeholder="Submit your Name"
              maxLength={15}
              value={namey}
              onChange={(e) => {
                setNamey(e.target.value);
              }}
            />
          </div>

          {/* Email Section with Mail Icon */}
          <div className="flex mb-4 items-center group">
            <Mail
              className=" 
                mr-1
                transition-transform duration-300
                text-gray-500
                group-focus-within:rotate-45
              "
              size={28} // Adjust icon size
            />
            <label htmlFor="Email" className="mr-2 w-25 text-xl font-">
              Email:
            </label>

            <input
              className="rounded-2xl outline-3 pl-4 w-70 text-xl"
              type="text"
              id="Email"
              placeholder="Submit your Email"
              value={emaily}
              onChange={(e) => {
                setEmaily(e.target.value);
              }}
            />
          </div>

          {/* Message Section with Bell Icon */}
          <div className="flex items-center group ">
            <Bell
              className=" 
                mr-1
                transition-transform duration-300
                text-gray-500
                group-focus-within:rotate-45
              "
              size={26} // Adjust icon size
            />
            <label htmlFor="Message" className="mr-2 w-25 text-xl font-">
              Message:
            </label>

            <textarea
              className="
                rounded-2xl resize-none
                focus:h-40
                outline-3 pl-4 w-70 text-xl
              "
              id="Message"
              placeholder="Write Message..."
              onChange={(e) => {
                setMessagey(e.target.value);
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center font-medium ">
            <button
              className=" translate-y-10 bg-white border-2 border-black rounded-2xl px-10 py-4   active:bg-blue-100 active:scale-90"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
        <Googly />
      </div>
    </>
  );
};

export default Page;
