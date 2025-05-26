import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CreateAccount from "../pages/CreateAccount";
import CreateProfile from "../pages/CreateProfile";
import MyHome from "../pages/MyHome";
import MySchedule from "../pages/MySchedule";
import StoreLocator from "../pages/StoreLocator";
import MainLayout from "../layouts/MainLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";
import ProtectedRoute from "../components/ProtectedRoute.jsx"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* these routes do not include MainLayout */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MyHome />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <SecondaryLayout>
                <MySchedule />
              </SecondaryLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/store"
          element={
            <ProtectedRoute>
              <MainLayout>
                <StoreLocator />
              </MainLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}



// Q - since I have <Routes /> inside of <BrowserRouter /> --> which are both inside of AppRouter() -- <AppRouter /> inside of App() 
// nvm since you are importing BrowserRouter from a dependency and not from AppRouter() ??? 



// changes for GIT commit 
