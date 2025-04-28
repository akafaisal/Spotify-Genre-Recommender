// app/page.js (or any client component)
"use client";

import { useState } from "react";

export function Sam() {
  const [fortune, setFortune] = useState(
    "Click the button to get your fortune!"
  );

  const getFortune = async () => {
    const res = await fetch("/api/fortune");
    const data = await res.json();
    setFortune(data.message);
  };

  return (
    <>
      <div className=" flex items-center justify-center min-h-150  min-w-screen rounded p-10 bg-[url('/fortune.jpeg')] bg-no-repeat bg-cover bg-[0%_30%] ">
        <div className=" flex flex-col items-center justify-center border-2 border-black p-10 w-1/3 rounded-3xl min-w-xs  backdrop-sepia-50">
          <h1 className="text-2xl font-bold mb-6 ">🔮 Fortune Game</h1>
          <button
            onClick={getFortune}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg  hover:bg-indigo-700 transition "
          >
            Reveal Sam's Fortune
          </button>
          <p className="mt-6 text-xl text-center max-w-md outline rounded p-5 bg-teal-300">
            {fortune}
          </p>
        </div>
      </div>
    </>
  );
}
