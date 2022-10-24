import { StrictMode, useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import LoginView from "./components/LoginView/LoginView";
import RegistrationView from "./components/RegistrationView/RegistrationView";
import MovieView from "./components/MovieView/MovieView";
import Profile from "./components/Profile/Profile";

// context
import AuthContext from "./components/AuthContext";

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <StrictMode>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/login"
              element={currentUser ? <Navigate to="/" /> : <LoginView />}
            />
            <Route path="/register" element={<RegistrationView />} />
            <Route
              path="/movies/:id"
              element={!currentUser ? <Navigate to="/" /> : <MovieView />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </StrictMode>
  );
};

render(<Index />, document.getElementById("root"));
