import { useState } from "react";
export function Practise() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn && (
        <button
          className=" p-2 outline-3 rounded-2xl outline-black "
          onClick={() => setIsLoggedIn(false)}
        >
          Who is
        </button>
      )}
      {/* Shows only if isLoggedIn is true */}
      {!isLoggedIn && (
        <button
          className="p-2 outline-3 rounded-2xl outline-black"
          onClick={() => setIsLoggedIn(true)}
        >
          FAISAL
        </button>
      )}
    </div>
  );
}

// }

// import { useEffect, useState } from "react";

// export function Practise() {
//     const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const lessgo = setInterval(() => {
//       setCounter((count) => count + 1);
//     }, 1000);

//     setTimeout(() => {
//       clearInterval(lessgo);
//     }, 5000);
//   }, []);

//   return <h1>{counter}</h1>;
// }
