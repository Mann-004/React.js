import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Stopwatch</h1>
      <div className="text-6xl font-mono mb-6">{formatTime(seconds)}</div>
      <div className="flex gap-4">
        <button
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
