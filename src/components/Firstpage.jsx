import React, { useEffect, useState } from "react";
import Animatebutton from "./AnimateButton";

const StartScreen = () => {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const handleOrientation = () => {
      const isLandscapeNow = window.innerWidth > window.innerHeight;
      setIsLandscape(isLandscapeNow);
    };

    handleOrientation();
    window.addEventListener("resize", handleOrientation);
    return () => window.removeEventListener("resize", handleOrientation);
  }, []);

  if (!isLandscape) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#8d57a5] text-white text-2xl text-center p-4">
        لطفاً گوشی خود را بچرخانید به حالت افقی 📱↔️
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#8d57a5] flex flex-col items-center justify-between p-4">
      {/* نوار بالایی */}
      <div className="w-full h-10 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 rounded-lg mb-6 relative overflow-hidden"></div>

      {/* محتوای اصلی */}
      <div className="flex flex-1 w-full max-w-6xl items-center justify-center flex-row">
        {/* ستون سمت چپ */}
        <div className="bg-[#a47abc] p-4 rounded-3xl h-[500px] border-4 border-white flex flex-col items-center justify-between gap-8">
          <Animatebutton />
          <Animatebutton />
        </div>

        {/* وسطی */}
        <div className="flex-1 mx-8 h-[500px] relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[#9ca2b8] rounded-xl overflow-hidden">
            <div className="h-full w-full flex flex-col justify-evenly">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="border-t border-black w-full"></div>
              ))}
            </div>
          </div>

          <div className="bg-white px-8 py-8 rounded-xl border-4 shadow-lg text-center text-2xl md:text-4xl font-bold relative z-10">
            هر وقت آماده بودی
            <br />
            یکی از دکمه‌ها رو بزن
          </div>
        </div>

        {/* ستون سمت راست */}
        <div className="bg-[#a47abc] p-4 rounded-3xl h-[500px] border-4 border-white flex flex-col items-center justify-between gap-8">
          <Animatebutton />
          <Animatebutton />
        </div>
      </div>

      {/* نوار پایینی */}
      <div className="w-full h-8 bg-[#cefef4] rounded-full mt-1"></div>
    </div>
  );
};

export default StartScreen;
