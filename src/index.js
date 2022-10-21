import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import LoginView from "./components/LoginView/LoginView";
import RegistrationView from "./components/RegistrationView/RegistrationView";

const root = document.getElementById("root");
render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegistrationView />} />
      </Routes>
    </Router>
  </StrictMode>,
  root
);
