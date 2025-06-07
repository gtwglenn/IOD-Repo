import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount"; 
import CreateProfile from "./pages/CreateProfile"; 
// import other pages like SignupPage, Dashboard, etc.

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} /> 
        <Route path="/create-profile" element={<CreateProfile />} /> 
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}
