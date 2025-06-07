import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import CreateProfile from "./pages/CreateProfile";
import MyHome from "./pages/MyHome";
import MySchedule from "./pages/MySchedule";
import StoreLocator from "./pages/StoreLocator";
import MainLayout from "./layouts/MainLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-profile" element={<CreateProfile />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <MyHome />
            </MainLayout>
          }
        />
        <Route
          path="/schedule"
          element={
            <MainLayout>
              <MySchedule />
            </MainLayout>
          }
        />
        <Route
          path="/store"
          element={
            <MainLayout>
              <StoreLocator />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
