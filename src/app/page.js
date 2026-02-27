"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const magicFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {

  const [entered, setEntered] = useState(false);

  const audioRef = useRef(null);

  const handleEnter = () => {

    setEntered(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }

  };

  return (

    <main className={`cloud-container ${entered ? "entered" : ""}`}>

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
      </audio>

      {/* NUBES */}
      <div className="cloud cloud-left"></div>
      <div className="cloud cloud-right"></div>

      {/* TEXTO */}
      {!entered && (
        <div
          onClick={handleEnter}
          className={`enter-text ${magicFont.className}`}
        >
          Entrar al mundo de fantasía
        </div>
      )}

    </main>

  );

}