import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-pink-500 via-rose-400 to-purple-600 overflow-hidden">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white text-xl opacity-30"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Glass Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-6">
          A little surprise for you 💖
        </h1>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-full bg-white text-pink-600 font-semibold shadow-lg"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="w-full py-3 rounded-full bg-pink-500/80 text-white font-semibold border border-white/30"
          >
            Create Account
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
