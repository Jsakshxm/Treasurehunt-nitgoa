"use client"
import React, { useEffect, useState, useRef } from 'react';
import Tile from '../components/Tile';
import tilesData from '../utils/utils';

const IndexPage = () => {
  const [shuffledTiles, setShuffledTiles] = useState([]);
  const [hint, setHint] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const shuffled = shuffleArray(tilesData);
    setShuffledTiles(shuffled);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setHint(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Welcome to the Treasure Hunt</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {shuffledTiles.map(tile => (
            <Tile
              key={tile.id}
              letter1={tile.letter1}
              letter2={tile.letter2}
              sound={tile.sound}
              onClick={playSound}
            />
          ))}
        </div>
        <button 
  onClick={() => { setHint(!hint) }} 
  className="block w-48 py-3 mx-auto mt-8 text-lg font-bold text-white transition duration-300 ease-in-out bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
>
  {hint ? 'Hide Hint' : 'Need a Hint?'}
</button>

      </div> 
      {hint &&  
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
          <div ref={modalRef} className="p-8 bg-white rounded-lg shadow-lg">
            <img src="/meme2.gif" alt="Hint" className="w-full rounded-lg" />
            <button onClick={() => setHint(false)} className="block w-full px-6 py-3 mt-4 text-lg font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Return to Main Page
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default IndexPage;
