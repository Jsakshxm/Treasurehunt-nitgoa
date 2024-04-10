"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { Howl } from "howler";
import { useEffect } from "react";



const page = () => {
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  const [card5, setCard5] = useState(false);
  const [card6, setCard6] = useState(false);
  const [card7, setCard7] = useState(false);
  const [card8, setCard8] = useState(false);
  const [card9, setCard9] = useState(false);
  const [card10, setCard10] = useState(false);
  const [card11, setCard11] = useState(false);
  const [card12, setCard12] = useState(false);
  const [whoIsWho, setWhoIsWho] = useState("");
  const [whoIsWhoans, setWhoIsWhoans] = useState(false);
  const [whoWho, setWhoWho] = useState("");
  const [whoWhoans, setWhoWhoans] = useState(false);

  const [card2more, setCard2more] = useState(0);
  const [card2color, setCard2Color] = useState("");
  const [card5more, setCard5more] = useState("");
  const [card12open, setCard12open] = useState(false);
  const [card6open, setCard6Open] = useState(false);
  const [sequence, setsequence] = useState("");
  const [semifinal, setsemifinal] = useState("");
  const [final, setfinal] = useState("");
  const [card11Open, setCard11Open] = useState(false);
  const [checkans,setcheckans]=useState(false)


  const [showElement, setShowElement] = useState(false);

  const handleWhoIsWho = () => {
    if (whoIsWho === "youknowwho" || whoIsWho === "you know who") {
      setWhoIsWhoans(true);
    }
  };
  const handleWhoWho = () => {
    if ((whoWho.toLowerCase()) === "owl") {
      setWhoWhoans(true);
    }
  };

  const whoIsWhoanscontent = (
    <div href="thalaforareason">
      {/* <button className="px-4 py-2 text-white bg-blue-500">Next</button> */}
      Congratulations
    </div>
  );

  const card1content = (
    <div className="flex flex-col justify-center w-full h-full gap-2 p-2 text-center bg-white rounded">
      <div className="flex gap-1">
        {/* <label for="html">who's here? :</label> */}
        <input
          onChange={(e) => {
            setWhoIsWho(e.target.value);
          }}
          className="p-1 border"
          type="text"
          placeholder="who's here?"
        />
        <button
          className="px-4 py-2 text-white bg-blue-500"
          onClick={handleWhoIsWho}
        >
          Enter
        </button>
      </div>

      {whoIsWhoans && (
        <div className="flex gap-1">
          {" "}
          <input
            onChange={(e) => {
              setWhoWho(e.target.value);
            }}
            className="p-1 border"
            type="text"
            placeholder="Do you who who?"
          />
          <button
            className="px-4 py-2 text-white bg-blue-500"
            onClick={handleWhoWho}
          >
            Enter
          </button>
        </div>
      )}

      {whoWhoans && whoIsWhoanscontent}
    </div>
  );
  const card2content = (
    <div className="flex flex-col p-2 bg-white rounded">
      <p className="mb-12">Bhai Yeh kya hai?</p>
      <div className="flex items-center justify-center gap-2">
        <div className="h-8 w-8 bg-[#ffcd00]"></div>
        <input
          onChange={(e) => {
            setCard2Color(e.target.value);
          }}
          className="p-1 border "
          type="text"
          name=""
          id=""
        />
      </div>
      <button
        onClick={() => {
          if (card2color.toLowerCase() === "#ffcd00") {
            setCard2more(1);
            handlecard3();
          }
        }}
        className="px-8 py-2 m-2 text-white bg-blue-500 rounded-xl"
      >
        Submit
      </button>

      <p>{card2more >= 1 && "Go to 3"}</p>
      <p>{card2more === 2 && "Go to 5"}</p>
    </div>
  );

  const playErrorSound = () => {
    const sound = new Howl({
      src: ["/error.mp3"],
    });
    sound.play();
  };

  const handlecard3 = () => {
    setTimeout(() => {
      setShowElement(true);
      setCard2more(2);
    }, 120000);
  };

  return (
    <>
      {/* 1 */}
      <div className="grid grid-cols-1 gap-10 p-10 text-center text-black bg-black lg:grid-cols-4">
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard1(0);
          }}
        >
          <div
            className={`flip-card-inner ${card1 >= 2 ? "flip" : ""}`}
            onClick={() => setCard1(card1 + 1)}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>1</p>
              {card1 === 1 && "knock!"}
              {card1 === 2 && "knock knock!"}
            </div>
            <div className="bg-white flip-card-back">
              {card1 >= 2 && card1content}
            </div>
          </div>
        </div>

        {/* //2 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard2(false);
          }}
        >
          <div
            className={`flip-card-inner ${card2 ? "flip" : ""}`}
            onClick={() => setCard2(true)}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>2</p>
            </div>
            <div className="bg-white flip-card-back">
              {card2 && card2content}
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="rounded flip-card h-96">
          <div
            className={`flip-card-inner ${card3 ? "flip" : ""}`}
            onClick={() => {
              if (card2more >= 1) {
                setCard3(true);
              } else {
                playErrorSound();
              }
            }}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>3</p>
            </div>
            <div className="bg-white flip-card-back">
              {card3 && (
                <div className="p-2">
                  <p>Ruk ja Bhai 2 minute</p>
                </div>
              )}
              {showElement && <p>Wapas Jaa Bhai!</p>}
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="rounded flip-card h-96">
          <div
            className={`flip-card-inner ${card4 ? "flip" : ""}`}
            onClick={() => setCard4(true)}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>4</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              <div>
                <img src="/voldermort.jpg" alt="" ></img>
                <p>I am There</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard5(false);
          }}
        >
          <div
            className={`flip-card-inner ${card5 ? "flip" : ""}`}
            onClick={() => setCard5(true)}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>5</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              <div className="flex flex-col">
                <img src="/Maths.png" alt=""></img>
                <input
                  type="text"
                  className="p-2 border"
                  onChange={(e) => {
                    setCard5more(e.target.value);
                  }}
                />
                <button
                  className="p-2 px-4 py-2 my-2 text-white bg-blue-500 rounded-2xl"
                  onClick={() => {
                    if (card5more === "12") {
                      setCard12open(true);
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard6(false);
          }}
        >
          <div
            className={`flip-card-inner ${card6 ? "flip" : ""}`}
            onClick={() => {
              if (sequence === "9" || sequence === "9698") {
                setCard6(true);
                setsequence(sequence + "6");
              } else {
                playErrorSound();
                setsequence("");
              }
            }}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>6</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              {sequence === "96" && <p>Go to 9</p>}
              {sequence === "96986" && <p>Go to 9</p>}
            </div>
          </div>
        </div>

        {/* 7 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard7(false);
          }}
        >
          <div
            className={`flip-card-inner ${card7 ? "flip" : ""}`}
            onClick={() =>{if(whoWhoans){setCard7(true)}else{playErrorSound()}}}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>7</p>
            </div>
            <div className="flip-card-back bg-white p-2 bg-[#ffcd00]">
              <Link href="/thalaforareason"><button className="px-4 py-2 text-white bg-yellow-500 rounded-xl">Go to heaven</button></Link>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard8(false);
          }}
        >
          <div
            className={`flip-card-inner ${card8 ? "flip" : ""}`}
            onClick={() => {
              if (sequence === "969") {
                setCard8(true);
                setsequence(sequence + "8");
              } else {
                playErrorSound();
                setsequence("");
              }
            }}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>8</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              {sequence === "9698" && <p>Go to 6</p>}
              {(semifinal === "969869" || semifinal === "69869") && (
                <p>What is x=1;y=5 then? x-=y+1?</p>
              )}
              {(semifinal === "969869" || semifinal === "69869") && (
                <input
                  onChange={(e) => {
                    setfinal(e.target.value);
                  }}
                  className=""
                  type="text"
                ></input>
              )}
              {(semifinal === "969869" || semifinal === "69869") && (
                <input type="email" className="p-2" />
              )}
              {(semifinal === "969869" || semifinal === "69869") && (
                <button
                  onClick={() => {
                    if (final === "-5") {
                      final === setCard11Open(true);
                    } else {

                    }
                  }}
                  className="px-2 py-4"
                  type="submit"
                >
                  Submit
                </button>
              )}
              {/* {(semifinal==="969869"||semifinal==="69869") && final==="-5" && } */}
            </div>
          </div>
        </div>

        {/* 9 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard9(false);
          }}
        >
          <div
            className={`flip-card-inner ${card9 ? "flip" : ""}`}
            onClick={() => {
              setCard9(true);
              setsequence(sequence + "9");
            }}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>9</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              {card9 && <p>Go to 6</p>}
              {sequence === "969" && <p>Go to 8</p>}
              {sequence === "969869" && (
                <div className="flex flex-col">
                  <p>Wapas aa gya yahan?</p>{" "}
                  <input
                  className="p-2 m-2 border"
                    onChange={(e) => {
                      setsemifinal(e.target.value);
                    }}
                    type="text"
                  />
                  <button onClick={()=>{setcheckans(true);}} className="px-4 py-2 text-white bg-blue-500">Submit</button>
                </div>
              )}
              {checkans && (semifinal === "969869" || semifinal === "69869") && (
                <p>Go to 8</p>
              )}
            </div>
          </div>
        </div>

        {/* 10 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard10(false);
          }}
        >
          <div
            className={`flip-card-inner ${card10 ? "flip" : ""}`}
            onClick={() => setCard10(true)}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>10</p>
            </div>
            <div className="p-2 bg-white flip-card-back realtive">
              <img src="/owl.jpeg" alt="" className="h-full pb-10"></img>
              <p className="absolute -translate-x-1/2 bottom-5 left-1/2">I am who who</p>
            </div>
          </div>
        </div>

        {/* 11 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard11(false);
          }}
        >
          <div
            className={`flip-card-inner ${card11 ? "flip" : ""}`}
            onClick={() => { if(card11Open){setCard11(true)}else{playErrorSound()}}}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>11</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              <p>Congratulations</p>
            </div>
          </div>
        </div>

        {/* 12 */}
        <div
          className="rounded flip-card h-96"
          onMouseLeave={() => {
            setCard12(false);
          }}
        >
          <div
            className={`flip-card-inner ${card12 ? "flip" : ""}`}
            onClick={() => { if(card12open){setCard12(true);}else{playErrorSound()}}}
          >
            <div className="flex-col justify-center h-full bg-white flip-card-front">
              <p>12</p>
            </div>
            <div className="p-2 bg-white flip-card-back">
              <Link href="/guessinggame">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-xl">
                  Start Game
                </button>
              </Link>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default page;