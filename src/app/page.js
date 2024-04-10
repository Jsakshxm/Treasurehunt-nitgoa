"use client"
import Link from 'next/link';
import Confetti from 'js-confetti';

const EntryPage = () => {
  const triggerConfetti = () => {
    const confetti = new Confetti();
    confetti.addConfetti();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
      {/* Pixel Art Logo */}
      <div className="mb-8">
        <img src="/codingclub.jpeg" alt="Pixel Logo" className="w-40 h-auto" />
      </div>
      <p className="mb-8 text-lg text-center lg:text-xl">
        PRESENTS
      </p>
      
      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold text-center lg:text-6xl">
        The Lost Pixel
      </h1>
      
      {/* Subtitle */}
      <p className="mb-8 text-lg text-center lg:text-xl">
        A Single Pixel holds a Key!
      </p>
      
      {/* Button to Enter the Treasure Hunt */}
      <Link href="/BhaiKoWelcome">
        <button onClick={triggerConfetti} className="px-6 py-2 text-lg text-white transition duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-700 lg:text-xl">
          Enter Now
        </button>
      </Link>
      <img src="/meme1.gif" alt="" className='p-2 m-2' />
    </div>
  );
};

export default EntryPage;
