import React from 'react';

const Tile = ({ letter1, letter2, sound, onClick }) => {
  return (
    <div
      className="relative p-4 text-center transition-transform transform bg-gray-900 rounded-md cursor-pointer hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(sound)}
    >
      
      <div className="absolute inset-0 bg-black rounded-md opacity-50"></div>

    
      <div className="relative z-10">
        <div className="mb-2 text-4xl text-yellow-400 transform rotate-180">{letter1} {letter2}</div>
        {/* <div className="mb-2 text-4xl text-yellow-400 transform rotate-180">{letter2}</div> */}
      </div>
    </div>
  );
};

export default Tile;
