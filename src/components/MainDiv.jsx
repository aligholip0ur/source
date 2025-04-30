export default function MainDiv() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col justify-evenly">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="border-t border-black w-full" />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center w-[min(80%,80vh)] h-[min(60%,40vh)]">
        <div
          className="bg-white w-full h-full rounded-lg border-4 shadow-lg flex flex-col items-center justify-center text-center p-4"
          style={{
            width: "90%",
            height: "80%",
            padding: "clamp(4px, 1vw, 12px)",
            fontSize: "min(3vw, 6vh, 35px)",
            fontWeight: "bold",
            lineHeight: "1.2",
            overflow: "hidden",
          }}
        >
          هر وقت آماده بودی
          <br />
          یکی از دکمه‌ها رو بزن
        </div>
      </div>
    </>
  );
}