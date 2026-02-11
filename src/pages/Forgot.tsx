import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

function Forgot() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent 💌");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
      <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-xl text-white text-center">
        <h2 className="text-2xl mb-4">Reset Password 💔</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg text-black w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleReset}
          className="px-6 py-3 bg-white text-pink-600 rounded-full"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default Forgot;
