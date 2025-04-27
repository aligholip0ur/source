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
    <div
    
      className={`bg-[#8a5fa5] rounded-2xl border border-black flex items-center justify-center w-full h-[12vw] min-h-[60px] max-h-[150px] aspect-square`}
    >
      <button   onClick={handleClick} className={`bg-[#d285cc] cursor-pointer w-full h-full rounded-2xl border border-black flex items-center justify-center transition-all duration-250 transform ${pressed ? "":"pb-1 sm:pb-2 md:pb-4"} `}>
        <div className="bg-[#fcd9f8] w-full h-full rounded-xl border border-black shadow-md"></div>
      </button>
    </div>
  );
}