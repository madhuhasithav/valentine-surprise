import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Valentine from "./pages/Valentine";
import Yes from "./pages/Yes";
import No from "./pages/No";
import CalendarPage from "./pages/CalendarPage";


function App() {
  return (
    <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/forgot" element={<Forgot />} />
  <Route path="/valentine" element={<Valentine />} />
  <Route path="/yes" element={<Yes />} />
  <Route path="/no" element={<No />} />
  <Route path="/calendar" element={<CalendarPage />} />



</Routes>

  );
}

export default App;