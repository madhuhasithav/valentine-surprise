import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful 💖");
      navigate("/valentine");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 relative">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white font-semibold"
      >
        ← Back
      </button>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-6">
          Login 💖
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
        />
        <p
  onClick={() => navigate("/forgot")}
  className="text-white mt-4 cursor-pointer hover:underline"
>
  Forgot Password?
</p>


        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-full bg-white text-pink-600 font-semibold shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
