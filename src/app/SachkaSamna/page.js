"use client"
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-10 text-white lg:p-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className='flex flex-col gap-8 text-center'>
        <h1 className='text-4xl font-bold lg:text-6xl'>Congo Bhai! ❤️ se congo!</h1>
        <p className='text-lg lg:text-xl'>Chal Bhai abh, yeh Karke dikha</p>
      </div>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
     <Link href="/LCS">   <img className='drop-shadow-[0_0px_50px_rgb(216,18,93)] rounded-lg animate-pulse' src="eye.gif" alt="Eye Animation" /> </Link>
     <Link href="/MathsPremi">   <img className='drop-shadow-[0_0px_50px_rgb(216,18,93)] rounded-lg animate-pulse' src="eye.gif" alt="Eye Animation" /> </Link>
     <Link href="/">   <img className='drop-shadow-[0_0px_50px_rgb(216,18,93)] rounded-lg animate-pulse' src="eye.gif" alt="Eye Animation" /> </Link>
      </div>
    </div>
  );
};

export default Page;
