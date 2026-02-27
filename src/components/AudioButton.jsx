"use client";

import { useAudio } from "../context/AudioContext";

export default function AudioButton() {
  const { isPlaying, toggleMusic } = useAudio();

  return (
    <button
      onClick={toggleMusic}
      className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        rounded-full
        backdrop-blur-md
        bg-white/30
        border border-white/40
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
      "
    >
      {isPlaying ? "🔊" : "🔇"}
    </button>
  );
}
