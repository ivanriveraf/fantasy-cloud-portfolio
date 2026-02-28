"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const windRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("musicEnabled") === "true";
  });

  useEffect(() => {
    audioRef.current = new Audio("/audio/ambient.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    windRef.current = new Audio("/audio/wind.mp3");
    windRef.current.volume = 0.3;

    return () => {
      audioRef.current?.pause();
      windRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
      localStorage.setItem("musicEnabled", "true");
    } else {
      audioRef.current.pause();
      localStorage.setItem("musicEnabled", "false");
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  const playWind = () => {
    if (windRef.current) {
      windRef.current.currentTime = 0;
      windRef.current.play().catch(() => {});
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleMusic, playWind }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
