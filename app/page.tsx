"use client";

import { useEffect, useState } from "react";
import { FaDumbbell, FaRunning, FaHeartbeat } from "react-icons/fa"; // Fitness icons

export default function Home() {
  const targetDate = new Date("2025-02-21T00:00:00Z").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#2e026d] via-[#7e22ce] to-[#c026d3] text-white text-center p-6 relative">
      {/* Heading with Fitness Icon */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg animate-pulse flex items-center gap-2">
        <FaDumbbell className="text-3xl sm:text-5xl" />
        Iness Fitness App
        <FaDumbbell className="text-3xl sm:text-5xl" />
      </h1>

      <p className="text-lg sm:text-2xl mt-4 text-white/90">
        We&apos;re launching something amazing in fitness!
      </p>

      {/* Countdown Timer */}
      <div className="flex gap-4 sm:gap-6 mt-8 text-4xl sm:text-6xl font-bold bg-black/30 p-6 sm:p-8 rounded-2xl shadow-2xl border-4 border-white/20">
        {Object.entries(timeLeft).map(([key, value], index, arr) => (
          <div key={key} className="flex flex-col items-center">
            <span className="block transition-all duration-300 ease-out transform text-shadow-lg">
              {value}
            </span>
            <span className="text-lg sm:text-2xl text-white/80 capitalize">
              {key}
            </span>
            {index < arr.length - 1 && (
              <span className="text-white/60 text-4xl"></span>
            )}
          </div>
        ))}
      </div>

      {/* Fitness Icon Section */}
      <div className="mt-8 flex gap-4 sm:gap-6 text-4xl">
        <FaRunning className="text-white/80" title="Running" />
        <FaHeartbeat className="text-white/80" title="Health" />
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm sm:text-lg text-white/80">
        Stay tuned! We&apos;ll be live on February 20, 2025!
      </p>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-transparent to-black opacity-40"></div>
    </div>
  );
}
