import { useState, useEffect } from "react";

const images = [
  "/pics/photo1.jpg",
  "/pics/photo2.jpg",
  "/pics/photo3.jpg"
];

const quotes = [
  "Every moment with you is magic ✨",
  "You are my safe place 💖",
  "Forever starts with you 💍"
];

function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-500 to-purple-600 text-white">
      <img
        src={images[index]}
        className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
      />
      <p className="mt-6 text-xl">{quotes[index]}</p>
    </div>
  );
}

export default Gallery;
