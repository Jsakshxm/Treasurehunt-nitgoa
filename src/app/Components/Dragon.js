import React from 'react';

const DragonGifWithText = () => {
  return (
    <div className="relative bg-black ">
      {/* Dragon GIF */}
      <img src="/dragon.gif" alt="Dragon" className="object-cover w-full h-full bg-transparent"  />

      {/* Text Overlay */}
      <div className="absolute text-lg font-bold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-xl">
        <p className="p-5 pt-16 animate-flame">Your Text Here</p>
      </div>
    </div>
  );
};

export default DragonGifWithText;
