"use client"
import React, { useState } from 'react';

const TreasureHuntPage = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleRefresh = () => {
    const newRefreshCount = refreshCount + 1;
    setRefreshCount(newRefreshCount);
    console.log("Come on, you can do it! Refresh count:", newRefreshCount);
    if (newRefreshCount === 5) {
      setShowButton(true);
    }
    if (newRefreshCount === 6) {
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Refresh after 2 seconds for the last time
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-center">Congo Bhai🥳</h1>
        <div className="mt-4 border-t-2 border-gray-200"></div>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">
Congo Bhai🥳
          <span className="font-bold"> 5 times</span>. With each refresh, you'll receive a message of encouragement. 
          Click the button below to get started!
        </p>
        {!showButton && (
          <button
            className="block px-4 py-2 mx-auto mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleRefresh}
          >
            Click to Refresh ({5 - refreshCount} more times)
          </button>
        )}
        {showButton && (
          <button
            className="block px-4 py-2 mx-auto mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-600"
            onClick={() => alert("Congratulations! You've completed the challenge.")}
          >
            Proceed to Next Stage
          </button>
        )}
        {refreshCount === 5 && (
          <p className="mt-2 text-sm text-gray-500">Refreshing... Please wait.</p>
        )}
      </div>
    </div>
  );
};

export default TreasureHuntPage;
