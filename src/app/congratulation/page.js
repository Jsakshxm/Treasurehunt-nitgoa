"use client";
import React, { useEffect } from 'react';
import JSConfetti from 'js-confetti';
import Game from '../Components/Game1';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    useEffect(() => {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    }, []);

    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-10 text-white bg-gradient-to-b from-gray-900 to-gray-800">
            <h1 className="mb-8 text-4xl font-bold">Congratulations Bhai!</h1>
            <p className="mb-8 font-mono text-lg text-center">Where whispers gather 'neath a vibrant frame, read the right phrase to ignite the hidden flame.</p>
            <Game />
            <div className="mt-8">
                <Link href="/QR1.png"
                    className="flex items-center justify-center px-4 py-2 text-gray-900 transition duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <Image src="/QR1.png" alt="QR Code" width={100} height={100} className="mr-2" />
                        <span>View QR Code</span>
                    
                </Link>
            </div>
        </div>
    );
};

export default Page;
