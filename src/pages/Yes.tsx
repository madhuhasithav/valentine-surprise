import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Yes() {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentLine, setCurrentLine] = useState("");

  // 🎵 Lyrics with timing (sync to your song)
  const lyrics = [
    { time: 0, text: "I found a love..." },
    { time: 5, text: "Beautiful and true..." },
    { time: 10, text: "Darling I was meant for you..." },
    { time: 18, text: "Dancing in the dark..." },
    { time: 25, text: "Barefoot on the grass..." },
    { time: 35, text: "Listening to our favorite song..." },
  ];

  // 🎵 Sync lyrics with song
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;

        const line = lyrics
          .slice()
          .reverse()
          .find((l) => currentTime >= l.time);

        if (line) {
          setCurrentLine(line.text);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 💖 Floating hearts
  const hearts = Array.from({ length: 20 });

  // 📸 Images
  const images = [
    "/pics/pic1.png",
    "/pics/pic4.png",
  ];

  return (
    <>
      {/* 🎵 Background Music */}
      <audio ref={audioRef} src="/music/perfect.mp3" autoPlay loop />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-rose-400 to-purple-700 text-white relative overflow-hidden">

        {/* 💖 Floating Hearts */}
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              opacity: 0.3,
            }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            💖
          </motion.div>
        ))}

        {/* Back Button */}
        <button
          onClick={() => navigate("/valentine")}
          className="absolute top-6 left-6 text-white font-semibold"
        >
          ← Back
        </button>

        <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl max-w-4xl text-center">

          <h1 className="text-4xl font-bold mb-6">
            You said YES 😭💖
          </h1>

          {/* 🎤 Animated Typing Lyrics */}
          <div className="mt-6 text-xl font-medium text-white h-10">
            <TypingText text={currentLine} />
          </div>

          <p className="text-lg leading-relaxed mt-6">
            From the moment you came into my life,
            everything became brighter, softer, and happier.
            <br /><br />
            I don’t just want you for today…
            I want you for every Valentine to come.
            <br /><br />
            Thank you for choosing me. 💘
          </p>

          {/* 📸 Gallery */}
          <div className="mt-20 w-full px-6 pb-10">
            <h2 className="text-3xl font-bold text-center mb-10">
              Our Beautiful Memories 💕
            </h2>

            <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory px-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="min-w-[300px] snap-center bg-white/10 backdrop-blur-lg p-4 rounded-3xl shadow-xl"
                >
                  <img
                    src={img}
                    alt="memory"
                    className="rounded-2xl w-full h-80 object-cover"
                  />

                  <p className="mt-4 text-center text-lg">
                    {index === 0 && "The day everything started 💖"}
                    {index === 1 && "Every moment with you is magic ✨"}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Yes;

// ✨ Typing Effect Component
function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}
