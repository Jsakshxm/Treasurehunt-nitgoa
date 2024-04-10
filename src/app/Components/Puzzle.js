"use client"
import React, { useState } from 'react';

const DragDropPuzzle = () => {
  const [letters, setLetters] = useState(['S', 'A', 'A', 'V', 'Y', 'A', 'S']);
  const [win, setWin] = useState(false);

  const handleDrop = (e, index) => {
    e.preventDefault();
    const letter = e.dataTransfer.getData('letter');
    const newLetters = [...letters];
    newLetters[index] = letter;
    setLetters(newLetters);
    if (newLetters.join('') === 'SAAVYAS') {
      setWin(true);
    } else {
      setWin(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, letter) => {
    e.dataTransfer.setData('letter', letter);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-12 h-12 m-2 border border-gray-400"
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => handleDragOver(e)}
          >
            <span
              draggable
              onDragStart={(e) => handleDragStart(e, letter)}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
      {win && <button className="px-4 py-2 ml-4 text-white bg-green-500 rounded hover:bg-green-600">You Win!</button>}
    </div>
  );
};

export default DragDropPuzzle;
