import React from 'react';

const MainComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold">Equations</h1>
      <div className="max-w-md mx-auto space-y-4">
        {/* Equations */}
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
          <p className="font-mono text-lg">b<sup>2</sup> = (x - 0)<sup>2</sup> + (y - 3)<sup>2</sup>, where x &gt; 0</p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
          <p className="font-mono text-lg">a<sup>2</sup> = (x - 0)<sup>2</sup> + (y + 3)<sup>2</sup>, where x &lt; 0</p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
          <p className="font-mono text-lg">c<sup>2</sup> = (x - 0)<sup>2</sup> + (y - 0)<sup>2</sup></p>
        </div>
        
        {/* New Equations */}
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
          <p className="font-mono text-lg">1<sup>2</sup> - (x - 0)<sup>2</sup> + (y - 3)<sup>2</sup></p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
          <p className="font-mono text-lg">1<sup>2</sup> - (x - 0)<sup>2</sup> + (y + 3)<sup>2</sup></p>
        </div>
      </div>

      {/* Meme Image */}
      <div className="relative mt-8 w-72 h-72">
        <img src="/meme3.gif" alt="" className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-2xl" />
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white"></div>
      </div>
    </div>
  );
};

export default MainComponent;
