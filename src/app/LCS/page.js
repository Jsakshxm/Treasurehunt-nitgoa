"use client"

const DragonGifWithText = () => {
  const handleDownload = () => {

    const blob = new Blob(["In realms where dragons soar high,Common flames paint the sky.Seek the longest bond they share in flightSequences of attacks echo in sight."], { type: "text/plain" });
    const url = URL.createObjectURL(blob);


    const a = document.createElement("a");
    a.href = url;
    a.download = "filename.txt";
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative h-screen bg-black">
      <img src="/dragon.gif" alt="Small Dragon" className="absolute top-0 left-0 object-cover h-80 w-[44rem]" />


<div className="absolute bottom-0 right-0">
  <img src="/dragon.gif" alt="Dragon" className="object-cover transform scale-x-[-1] h-80 w-[44rem]" />
</div>


<div className="absolute" style={{ top: "220px", left: "320px", transform: 'translate(-50%, -50%)' }}>
  <p className="p-5 text-4xl font-bold text-red-600 shadow-2xl animate-flame shadow-red-700">
    Your Text Here
  </p>
</div>


<div className="absolute right-48 top-[610px]">
  <p className="p-5 text-5xl font-bold text-red-600 shadow-2xl shadow-black animate-flame-right-to-left">
    Your Text Here
  </p>
</div>


      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <button onClick={handleDownload} className="px-6 py-3 text-lg font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Broo I need hint
        </button>
      </div>
    </div>
  );
};

export default DragonGifWithText;
