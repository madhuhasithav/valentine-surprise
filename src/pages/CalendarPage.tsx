import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState("");

  const valentineMessages: any = {
    7: "Happy Rose Day 🌹 You are my forever flower.",
    8: "Propose Day 💍 I’d choose you every lifetime.",
    9: "Chocolate Day 🍫 You’re sweeter than all chocolates.",
    10: "Teddy Day 🧸 I wish I could hug you right now.",
    11: "Promise Day 🤝 I promise to love you always.",
    12: "Hug Day 🤗 Sending you the tightest hug.",
    13: "Kiss Day 💋 One kiss, forever love.",
    14: "Valentine’s Day ❤️ You are my everything."
  };

  const handleDateClick = (value: any) => {
    setDate(value);
    const day = value.getDate();
    if (valentineMessages[day]) {
      setMessage(valentineMessages[day]);
    } else {
      setMessage("This day is special because of you 💖");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-6">Our Valentine Week 💘</h1>

      <Calendar onChange={handleDateClick} value={date} />

      {message && (
        <div className="mt-6 bg-white/20 p-6 rounded-2xl backdrop-blur-lg">
          <p className="text-lg">{message}</p>
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
