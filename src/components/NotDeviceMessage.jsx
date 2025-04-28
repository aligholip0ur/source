import React from "react";

export default function NotDeviceMessage() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white p-4 landscape:hidden">
      <h2 className="text-2xl font-bold text-center mb-2">لطفاً گوشی بخیر</h2>
      <p className="text-center"></p>
    </div>
  );
} 