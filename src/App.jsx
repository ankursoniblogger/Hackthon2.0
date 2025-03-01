import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home"
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUp";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/register" element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
}
