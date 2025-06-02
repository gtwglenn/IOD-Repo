import { ThemeProvider } from "@emotion/react";
import "./App.css";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { purpleTheme } from "./themes/purpleTheme";

import React from "react";

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={purpleTheme}>
        <NavBar />
        <AppRoutes />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
