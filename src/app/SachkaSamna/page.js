"use client"

import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");

  const handleCheck1 = () => {
    if (input1.toUpperCase() === "GO") {
      setResult1("Correct!");
    } else {
      setResult1("Incorrect");
    }
  };

  const handleCheck2 = () => {
    if (input2 === "336") {
      setResult2("Correct!");
    } else {
      setResult2("Incorrect");
    }
  };

  const handleCheck3 = () => {
    if (input3.toUpperCase() === "I4") {
      setResult3("Correct!");
    } else {
      setResult3("Incorrect");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-10 text-white lg:p-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className='flex flex-col gap-8 text-center'>
        <h1 className='text-4xl font-bold lg:text-6xl'>Congo Bhai! ❤️ se congo!</h1>
        <p className='text-lg lg:text-xl'>Chal Bhai abh, yeh Karke dikha</p>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <div className="flex flex-col items-center">
          <Link href="/DragonFight"><img className='drop-shadow-[0_0px_50px_rgb(216,18,93)] rounded-lg animate-pulse' src="eye.gif" alt="Eye Animation" /></Link>
          <input
            type="text"
            maxLength={2}
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="p-2 mt-2 text-black border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            style={{ width: "200px" }} placeholder='Enter letters'
          />
          <button onClick={handleCheck1} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg">Check</button>
          <p>{result1}</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/MathsPremi"><img className='drop-shadow-[0_0px_50px_rgb(216,18,93)] rounded-lg animate-pulse' src="eye.gif" alt="Eye Animation" /></Link>
          <input
            type="text"
            maxLength={3}
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="p-2 mt-2 text-black border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            style={{ width: "200px" }} placeholder='Enter a b c'
          />
          <button onClick={handleCheck2} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg">Check</button>
          <p>{result2}</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="/SecretMessage"><img className='drop-shadow-[0_0px_50px_rgb(216,18,93)] rounded-lg animate-pulse' src="eye.gif" alt="Eye Animation" /></Link>
          <input
            type="text"
            maxLength={2}
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            className="p-2 mt-2 text-black border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
            style={{ width: "200px" }} placeholder='letter + digit'
          />
          <button onClick={handleCheck3} className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg">Check</button>
          <p>{result3}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
