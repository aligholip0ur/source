import React, { useState } from "react";

export default function Animatebutton()
{
    
  const [pressed, setPressed] = useState(false);

  const handelclick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 150);
  };

  return(
    <>
     <button
            onClick={handelclick}
            className={`bg-[#8a5fa5] transition-all duration-150 transform ${
              pressed ? "scale-90" : "scale-100"
            } cursor-pointer rounded-2xl border border-black flex items-center justify-center`}
          >
            <div className="bg-[#d285cc] pb-5 rounded-2xl border border-black flex items-center justify-center">
              <div className="bg-[#fcd9f8] w-40 h-40 rounded-xl border border-black shadow-md"></div>
            </div>
          </button>
    </>
  )
}