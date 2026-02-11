import { useState } from "react";
import { useNavigate } from "react-router-dom";


function No() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveButton = () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  setPosition({ x, y });
};



  const messages = [
    "Why not? 😢",
    "Are you sure? My heart prepared so much for this… 💔",
    "I even learned coding just for you… 😭",
    "Okay… last chance… will you reconsider? 💘",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-rose-600 text-white text-center px-6">

      <h1 className="text-3xl font-bold mb-8">
        {messages[step]}
      </h1>

      {step < messages.length - 1 ? (
        <button
          onClick={() => setStep(step + 1)}
          className="px-8 py-3 rounded-full bg-white text-pink-600 font-semibold shadow-lg hover:scale-110 transition"
        >
          Continue 💔
        </button>
      ) : (
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/yes")}
            className="px-8 py-3 rounded-full bg-white text-pink-600 font-semibold shadow-lg hover:scale-110 transition"
          >
            Okay YES 💖
          </button>

          <button
  onMouseEnter={moveButton}
  style={{
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: "0.2s ease",
  }}
  className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold shadow-lg"
>
  Still NO 💀
</button>

        </div>
      )}
    </div>
  );
}

export default No;
