import React from 'react';
import Puzzle from '../Components/Puzzle';

const TreasureHuntPage = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-center">Treasure Hunt</h1>
        <div className="mt-4 border-t-2 border-gray-200"></div>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">
          In a mysterious turn, a journey unfurled,
          Where a character found themselves in another world.
          Beyond the border, in lands unknown,
          Secrets whispered, mysteries shown.
          The episode where secrets entwine,
          In this treasure hunt, the truth to define.
          Where laughter echoes, and stories intertwine,
          The place where the community shines.
        </p>
      </div>
    </div> <Puzzle/></>
  );
};

export default TreasureHuntPage;
