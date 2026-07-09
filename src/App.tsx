import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Enrollment from "./components/Enrollment";
import Attendance from "./components/Attendance";
import FeedbackForm from "./components/FeedbackForm";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/feedback" element={<FeedbackForm />} />
    </Routes>
  );
}

export default App;