import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully 💖");
      navigate("/login");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-pink-600 to-purple-600">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white font-semibold"
      >
        ← Back
      </button>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-6">
          Create Account 💘
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
        />

        <button
          onClick={handleSignup}
          className="w-full py-3 rounded-full bg-white text-pink-600 font-semibold shadow-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;