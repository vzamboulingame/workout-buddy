import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </WorkoutsContextProvider>
  </React.StrictMode>
);
