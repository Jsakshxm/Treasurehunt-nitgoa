import React from 'react';

const MainComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header */}
      <header className="mb-8 text-3xl font-bold text-center text-gray-800">
       
        <p className="pt-4 text-lg font-light">There's good, there's bad, and then there is you</p>
        <p className="text-lg font-light">get abc to get ahead
</p>
        <p className="text-lg font-light">(dont forget to follow symmetry)</p>
      </header>

      {/* Equations */}
      <div className="w-full max-w-md space-y-4">
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <p className="font-mono text-lg">b<sup>2</sup> = (x - 0)<sup>2</sup> + (y - 3)<sup>2</sup>, where x &gt; 0</p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <p className="font-mono text-lg">a<sup>2</sup> = (x - 0)<sup>2</sup> + (y + 3)<sup>2</sup>, where x &lt; 0</p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <p className="font-mono text-lg">c<sup>2</sup> = (x - 0)<sup>2</sup> + (y - 0)<sup>2</sup></p>
        </div>

        {/* New Equations */}
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <p className="font-mono text-lg">1<sup>2</sup> - (x - 0)<sup>2</sup> + (y - 3)<sup>2</sup></p>
        </div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <p className="font-mono text-lg">1<sup>2</sup> - (x - 0)<sup>2</sup> + (y + 3)<sup>2</sup></p>
        </div>
      </div>

      {/* Meme Image */}
      <div className="relative mt-8 overflow-hidden rounded-lg shadow-md w-72 h-72">
        <img src="/meme3.gif" alt="Meme" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
        
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
