import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Browse" element={<Browse />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
