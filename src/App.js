import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} />
         
      </Routes>
    </Router>
  );
}
