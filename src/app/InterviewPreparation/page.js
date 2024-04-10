"use client"

import { useState } from "react";

const DragonGifWithText = () => {
  const [win, setWin] = useState(false);
  const saksham = 38;
  const [id, setId] = useState(null);
  

  const handleCheck = () => {
    if (id == saksham) {
      setWin(true);
    }
  };

  return (
    <div className="relative h-screen bg-black">
     
      
      
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-80 top-3/4">
        <img src="/dragon.gif" alt="Small Dragon" className="object-cover h-96 w-[44rem]" />
      </div>

      <div className="absolute top-0 right-0">
        <img src="/dragon.gif" alt="Dragon" className="object-cover transform scale-x-[-1] h-[26rem] w-[44rem]" />
      </div>

      <div className="absolute transform -translate-x-1/2 top-52 left-1/4 w-72">
        <p className="px-6 py-3 text-2xl font-bold text-white bg-black bg-opacity-50">
          "Do you sense the whispers of the ancients, brother? What tale do these ancient runes convey?"
        </p>
      </div>

      <div className="absolute bottom-12 right-12 w-80">
        <p className="px-6 py-3 text-2xl font-bold text-white bg-black bg-opacity-50">
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

      {win && <p className="absolute px-6 py-3 text-lg text-white bg-green-500 rounded-lg bottom-4 left-1/2">Congratulations! Output + 103073 = res  &nbsp; ult</p>}
      <div className="absolute bottom-0 pt-36"> <p className="z-20 font-mono font-medium text-white ">
        In realms where dragons soar high,
        Common flames paint the sky. </p>
      <p className="z-20 font-mono font-medium text-white "> Seek the longest bond they share in flight,
        Sequences of attacks echo in sight. </p></div>
        
    </div>
  );
};

export default DragonGifWithText;
