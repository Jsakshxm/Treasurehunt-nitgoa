'use client';

import React, { useState, useEffect } from 'react';
import Puzzle from '../Components/Puzzle';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('secretkey') || 'level1' : 'level1'
  ); // Check for window before accessing localStorage

  useEffect(() => {
    // Ensure window is available before using localStorage
    if (typeof window !== 'undefined') {
      if (secretKey === 'level1') {
        localStorage.setItem('secretkey', 'level2');
        console.log('Level 1: Setting secretKey to level2');
      }
      handleRedirect(); // Call the redirect function
    }
  }, []); // Run only once on initial render

  const handleRedirect = () => {
    switch (secretKey) {
      case 'level3':
        window.location.href = 'https://treasurehunt.saavyas.in/youarecloser';
        console.log('Level 2: Redirecting to /youareclose');
        break;
      case 'level4':
        window.location.href = 'https://treasurehunt.saavyas.in/youknowwhattodonext';
        console.log('Level 2: Redirecting to /youareclose');
        break;
      case 'level5':
        window.location.href = 'https://treasurehunt.saavyas.in/congratulation';
        console.log('Level 2: Redirecting to /youareclose');
        break;
      case 'level2':
      default:
        window.location.href = 'https://treasurehunt.saavyas.in/youareclose';
        console.log('Level 2: Redirecting to /youareclose');
    }
  };

  return (
   
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
    
      <h1>This site seems glitchy. Try something!</h1>
    </div>
  );
};

export default Page;