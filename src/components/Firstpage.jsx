import React, { useState, useEffect } from "react";
import AnimateButton from "./AnimateButton";
import RotateMessage from "./RotateMessage";

const StartScreen = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // بررسی اولیه
    checkOrientation();

    // افزودن event listener برای تغییر orientation
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  return (
    <>
      {isPortrait && <RotateMessage />}
      
    <div className="h-screen w-screen bg-[#8d57a5] flex flex-col items-center justify-between overflow-hidden p-1  md:p-2">
      <div className="w-full h-3 md:h-6 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 rounded-lg"></div>

      <div className="flex w-full h-[calc(100vh-80px)] max-w-[2000px] items-stretch justify-center gap-1 md:gap-4 my-8 overflow-hidden">
        <div className="bg-[#a47abc] p-1 md:p-4 rounded-3xl w-[25%] max-w-[300px] border-2 md:border-4 border-white flex flex-col items-center justify-between gap-2 md:gap-4">
          <AnimateButton />
          <AnimateButton />
        </div>

        <div className="flex-1 bg-[#9ca2b8] rounded-xl border-2 md:border-4 border-white flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-evenly z-0">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="border-t border-black w-full"></div>
            ))}
          </div>

          <div className="bg-white px-4 py-3 md:px-10 md:py-8 rounded-lg md:rounded-xl border-2 md:border-4 shadow-lg text-center text-sm md:text-2xl lg:text-4xl font-bold z-10">
            هر وقت آماده بودی
            <br />
            یکی از دکمه‌ها رو بزن
          </div>
        </div>

        <div className="bg-[#a47abc] p-1 md:p-4 rounded-3xl w-[25%] max-w-[300px] border-2 md:border-4 border-white flex flex-col items-center justify-between gap-2 md:gap-4">
          <AnimateButton />
          <AnimateButton />
        </div>
      </div>

      <div className="w-full h-2 md:h-6 bg-[#cefef4] rounded-full"></div>
    </div>
    </>
  );
};

export default StartScreen;