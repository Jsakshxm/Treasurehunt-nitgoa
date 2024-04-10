"use client"

import { useState } from "react";

const DragonGifWithText = () => {
  const [win, setWin] = useState(false);
  const key = 38
  const [id, setId] = useState(null);


  const handleCheck = () => {
    if (id == key) {
      setWin(true);
    
    }
    console.log(key,id);
  };

  return (
    <div className="relative h-screen bg-black">
      <img src="/dragon.gif" alt="Small Dragon" className="absolute top-0 left-0 object-cover h-80 w-[44rem]" />

      <div className="absolute bottom-0 right-0">
        <img src="/dragon.gif" alt="Dragon" className="object-cover transform scale-x-[-1] h-80 w-[44rem]" />
      </div>

      <div className="absolute" style={{ top: "220px", left: "50%", transform: 'translateX(-50%)' }}>
        <p className="px-10 py-6 text-4xl font-bold text-red-600 shadow-2xl animate-flame shadow-red-700">
          "Do you sense the whispers of the ancients, brother? What tale do these ancient runes convey?"
        </p>
      </div>

      <div className="absolute right-48 top-[610px]">
        <p className="p-5 text-4xl font-bold text-red-600 shadow-2xl shadow-black animate-flame-right-to-left">
          "Aye, the winds carry the echoes of a forgotten saga, but can you decipher the riddles woven in these cryptic strings?"
        </p>
      </div>

      <div className="absolute top-[25rem] left-1/2 transform -translate-x-1/2">
        <input
          type="text"
          placeholder="Enter your number"
          className="px-6 py-4 text-lg text-black bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
        <button onClick={handleCheck} className="px-8 py-3 mt-4 text-lg font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Check
        </button>
      </div>

      {win && <p className="absolute px-6 py-3 text-2xl text-white transform -translate-x-1/2 bg-green-500 rounded-lg bottom-4 left-1/2">Congratulations! Output + 103073 = res ult</p>}
    </div>
  );
};

export default DragonGifWithText;
 