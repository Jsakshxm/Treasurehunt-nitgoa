'use client';

import React, { useState, useEffect } from 'react';
import Game from '../Components/Game';

const Page = () => {
  const [secretKey, setSecretKey] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('secretkey') || 'level1' : 'level1'
  );

  useEffect(() => {
    // Redirect to '/thiswebsiteisglitchy' if secretKey is level1 (on client-side)
    if (secretKey === 'level1' && typeof window !== 'undefined') {
      window.location.replace('https://treasurehunt.saavyas.in/ThiswebsiteisGlitchy');
    }
  }, [secretKey]); // Run only when secretKey changes

  useEffect(() => {
    // Handle secretKey progression and redirections
    if (typeof window !== 'undefined') {
      if (secretKey === 'level2') {
        localStorage.setItem('secretkey', 'level3');
      }
      if (secretKey === 'level4') {
        window.location.replace('https://treasurehunt.saavyas.in/youknowwhattodonext');
        console.log('Level 2: Redirecting to /youknowwhattodonext');
      }
      if (secretKey === 'level5') {
        window.location.replace('https://treasurehunt.saavyas.in/congratulation');
        console.log('Level 2: Redirecting to /congratulation');
      }
      if (secretKey === 'level3') {
        window.location.replace('https://treasurehunt.saavyas.in/youarecloser');
      }
    }
  }, [secretKey]); // Run only when secretKey changes

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-10 lg:p-24">
      <h1>Level 2  yeah!</h1>
      <Game></Game>
    </div>
  );
};

export default Page;