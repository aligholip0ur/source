import React, { useState, useEffect } from "react";
import AnimateButton from "./AnimateButton";
import RotateMessage from "./RotateMessage";
import MainDiv from "./MainDiv";
import Header from "./Header";
import Footer from "./Footer";
const StartScreen = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  return (
    <>
      {isPortrait && <RotateMessage />}

      <div className="fixed inset-0 bg-[#8d57a5] flex flex-col overflow-hidden ">
        <Header />
        <div className="min-h-0 flex  items-center  justify-center w-full overflow-hidden py-6">
          <div
            className="w-full py-2  my-4"
            style={{
              width: "min(90vw, 250vh)", 
              height: "min(56vw, 80vh)",
              aspectRatio: "8/5",
              maxWidth: "1600px",
              maxHeight: "1000px",
              margin: "20px auto",
            }}
          >
            <div className="grid grid-cols-16 gap-2 md:gap-4 w-full h-full">
              <div className="col-span-3 bg-[#a47abc] rounded-3xl border-4 border-white flex flex-col p-2 h-full">
                <div className="w-full" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
                <div className="w-full mt-auto" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
              </div>

              <div className="col-span-10 bg-[#9ca2b8] rounded-xl border-2 border-white relative overflow-hidden flex items-center justify-center p-2">
                <MainDiv />
              </div>

              <div className="col-span-3 bg-[#a47abc] rounded-3xl border-2 border-white flex flex-col p-2 h-full">
                <div className="w-full" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
                <div className="w-full mt-auto" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
              
              </div>
             
            </div>
          
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StartScreen;
