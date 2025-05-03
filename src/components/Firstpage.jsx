import React, { useState, useEffect } from "react";
import AnimateButton from "./AnimateButton";
import RotateMessage from "./RotateMessage";
import MainDiv from "./MainDiv";
import Header from "./Header";
import Footer from "./Footer";
import NotDeviceMessage from "./NotDeviceMessage";
const StartScreen = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isDevice , setisDevice ] = useState(false);
  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
      console.log(window.innerHeight / window.innerWidth);
      if ((window.innerHeight / window.innerWidth) < 0.3707) {
        setisDevice(true);
        console.log(isDevice);
        
      } else {
        setisDevice(false);
      }
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  },[]);
  
  return (
    <React.Fragment>
      {isPortrait && <RotateMessage />}
      {isDevice ? <NotDeviceMessage/> : null}
      <div className="fixed inset-0 bg-[#8d57a5] flex flex-col  overflow-hidden">
        <Header />
        <div
          className=" flex items-center   justify-center overflow-hidden "
          style={{
            height: "100%",
          }}  
        >
          <div
            className=" flex align-middle w-[min(80vw,125vh)]  box "
            style={{
              height: "93%",
              margin: "20px auto",
            }}
          >
            <div className="grid grid-cols-12 items-center w-full  h-full" >

              <div className="col-span-2 bg-[#a47abc] rounded-xl border-4 border-white flex flex-col p-2  h-full" style={{ transform: "translateX(-30px)" }}>
                <div className="w-full" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
                <div className="w-full mt-auto" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
              </div>

              <div className="col-span-8 px-5 bg-[#9ca2b8] rounded-xl border-2 border-white relative overflow-hidden flex items-center aspect-[8/5]  justify-center " >
                <MainDiv />
              </div>

              <div className="col-span-2 bg-[#a47abc] rounded-xl border-4 border-white flex flex-col p-2 h-full" style={{ transform: "translateX(30px)" }}>
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
    </React.Fragment>
  );
};

export default StartScreen;
