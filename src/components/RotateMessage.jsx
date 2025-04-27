import React from "react";

export default function RotateMessage() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white p-4 landscape:hidden">
      <div className="animate-spin-slow text-6xl mb-4">🔄</div>
      <h2 className="text-2xl font-bold text-center mb-2">لطفاً گوشی خود را بچرخانید</h2>
      <p className="text-center">برای بهترین تجربه کاربری، دستگاه خود را به حالت افقی (landscape) بچرخانید</p>
    </div>
  );
} 