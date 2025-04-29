import React, { useState, useEffect } from "react";
import AnimateButton from "./AnimateButton";
import RotateMessage from "./RotateMessage";
import MainDiv from "./MainDiv";
import Header from "./Header";
import Footer from "./Footer";
import NotDeviceMessage from "./NotDeviceMessage";
const StartScreen = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isDevice, setisDevice] = useState(false);
  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
      console.log(window.innerHeight / window.innerWidth);
      if (window.innerHeight / window.innerWidth < 0.3707) {
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
  }, []);
  return (
    <React.Fragment>
      {isPortrait && <RotateMessage />}
      {isDevice ? <NotDeviceMessage /> : null}
      <div className="fixed inset-0 bg-[#8d57a5] flex flex-col  overflow-hidden">
        <Header />
        <div
          className=" flex z-10 items-center  justify-center overflow-hidden "
          style={{
            height: "100%",
          }}
        >
          <div
            className="box  flex align-middle w-[min(70vw,180vh)] lg:!w-[min(80vw,210vh)]"
            style={{
              height: "90%",
              margin: "20px auto",
            }}
          >
            <div className="grid grid-cols-14 gap-2 md:gap-4 w-full ">
            <div className="col-span-2 bg-[#a47abc] rounded-2xl border-4 border-white flex flex-col p-2 aspect-[2/7] md:aspect-[2/6] lg:aspect-[2/7] max-h-full w-full">
                <div className="w-full" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
                <div className="w-full mt-auto" style={{ aspectRatio: "1/1" }}>
                  <AnimateButton />
                </div>
              </div>

              <div className="col-span-10 bg-[#9ca2b8] rounded-xl border-2 border-white relative overflow-hidden flex   items-center justify-center md:aspect-[8/4.2] lg:aspect-[8/5] aspect-[8/5] max-h-full w-full">
                <MainDiv />
              </div>

              <div className="col-span-2 bg-[#a47abc] rounded-2xl border-4 border-white flex flex-col p-2 aspect-[2/7] md:aspect-[2/6] lg:aspect-[2/7] max-h-full w-full">
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
