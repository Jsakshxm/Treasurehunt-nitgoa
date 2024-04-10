"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import JSConfetti from 'js-confetti'
import Link from 'next/link'
import Game from '../Components/Game1';



const page = () => {
    useEffect(() => {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti();
    },[]);
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1> congratulations bhai ! Abb aagle stage pr jane ka rasta thund </h1>
     <Game/>
    </div>
  )
}

export default page