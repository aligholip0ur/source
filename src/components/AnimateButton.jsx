import React, { useState } from "react";

export default function AnimateButton() {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 150);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#8a5fa5] transition-all duration-150 transform ${
        pressed ? "scale-90" : "scale-100"
      } cursor-pointer rounded-2xl border border-black flex items-center justify-center w-full h-[12vw] min-h-[60px] max-h-[150px] aspect-square`}
    >
      <div className="bg-[#d285cc] w-full h-full rounded-2xl border border-black flex items-center justify-center pb-1 sm:pb-2 md:pb-4">
        <div className="bg-[#fcd9f8] w-full h-full rounded-xl border border-black shadow-md"></div>
      </div>
    </button>
  );
}