import React, { useState } from "react";

export default function AnimateButton() {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 200);
  };

  return (
    <div className="w-full" style={{ aspectRatio: "1/1" }}>
      <button
        onClick={handleClick}
        style={{marginTop:"clamp(2px, 2vh, 30px)"}}
        className="w-full h-[90%] bg-[#8a5fa5] rounded-2xl border border-black flex items-center justify-center transition-all duration-200"
      >
        <div className="bg-[#d285cc] w-full h-full rounded-2xl border border-black flex items-center justify-center">
          <div
            className="bg-[#fcd9f8] cursor-pointer w-full h-full rounded-xl border border-black shadow-md transition-all duration-200"
            style={{
              marginBottom: pressed ? "0" : "clamp(12px, 8vh, 45px)",
            }}
          ></div>
        </div>
      </button>
    </div>
  );
}
