import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Valentine() {
  const navigate = useNavigate();
  const [popupMessage, setPopupMessage] = useState("");

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
    const specialDates: { [key: string]: string } = {
  "2026-02-07": "Rose Day 🌹 You are my favorite flower.",
  "2026-02-08": "Propose Day 💍 I would choose you in every lifetime.",
  "2026-02-09": "Chocolate Day 🍫 Life is sweeter with you.",
  "2026-02-10": "Teddy Day 🧸 I wish I could hug you right now.",
  "2026-02-11": "Promise Day 🤝 I promise to stand by you always.",
  "2026-02-12": "Hug Day 🤗 Sending you the tightest hug ever.",
  "2026-02-13": "Kiss Day 😘 One kiss to seal my love.",
  "2026-02-14": "Valentine’s Day 💖 You are my forever.",
  "2026-11-05": "Advance Happy Birthday My Love 🎂 You are the best gift in my life."
};

const handleDate = (date: string) => {
  if (specialDates[date]) {
    setPopupMessage(specialDates[date]);
  } else {
    setPopupMessage("A special day waiting for us 💕");
  }
};
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <button
  onClick={() => setShowCalendar(!showCalendar)}
  className="absolute top-6 right-6 text-3xl hover:scale-110 transition"
>
  📅
</button>
<AnimatePresence>
  {showCalendar && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-20 right-6 bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-2xl"
    >
      <input
  type="date"
  min="2026-01-01"
  max="2026-12-31"
  defaultValue="2026-02-07"
  onChange={(e) => handleDate(e.target.value)}
  className="p-2 rounded-lg text-black"
/>

    </motion.div>
  )}
</AnimatePresence>

{showCalendar && (
  <div className="absolute top-20 right-6 bg-white text-black p-6 rounded-xl shadow-xl">
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => {
        const date = e.target.value;
        setSelectedDate(date);

        if (date === "2026-02-14") {
          alert("Valentine’s Day 💖 You are my forever.");
        } else if (date === "2026-02-07") {
          alert("Rose Day 🌹 You are my beautiful rose.");
        } else {
          alert("A special day waiting for us 💕");
        }
      }}
    />
    {popupMessage && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white text-pink-600 p-10 rounded-3xl shadow-2xl max-w-md text-center animate-fade-in">

      <h2 className="text-2xl font-bold mb-4">
        Special Message 💌
      </h2>

      <p className="text-lg mb-6">
        {popupMessage}
      </p>

      <button
        onClick={() => setPopupMessage("")}
        className="px-6 py-2 rounded-full bg-pink-500 text-white"
      >
        Close 💖
      </button>

    </div>
  </div>
)}

  </div>
)}



      <h1 className="text-4xl font-bold mb-10">
        Will you be my Valentine? 💖
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/yes")}
          className="px-10 py-3 rounded-full bg-white text-pink-600 font-semibold text-lg shadow-lg hover:scale-110 transition"
        >
          YES 💘
        </button>

        <button
          onClick={() => navigate("/no")}
          className="px-10 py-3 rounded-full bg-rose-600 text-white font-semibold text-lg shadow-lg hover:scale-110 transition"
        >
          NO 💔
        </button>
      </div>

    </div>
  );
}

export default Valentine;
