"use client";

import { useState, useEffect } from "react";
import { useAudio } from "../context/AudioContext";

export default function WelcomeScreen({ children }) {

  const [showButton, setShowButton] = useState(false);
  const [entered, setEntered] = useState(false);

  const { playWind, startMusic } = useAudio();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // aparece después de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {

    playWind();

    setEntered(true);

    setTimeout(() => {
      startMusic();
    }, 1500);
  };

  return (
    <>
      <div className={`welcome-container ${entered ? "entered" : ""}`}>

        <div className="cloud cloud-left" />
        <div className="cloud cloud-right" />

        {showButton && (
          <div
            onClick={handleEnter}
            className="enter-text fade-in"
          >
            Entrar al mundo mágico ✨
          </div>
        )}

      </div>

      <div className={`site-content ${entered ? "show" : ""}`}>
        {children}
      </div>
    </>
  );
}