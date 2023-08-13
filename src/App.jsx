import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Terminal from "./components/cli/Terminal";
import Gui from "./components/gui/Gui";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cli" />} />
        <Route path="/gui" element={<Navigate to="/gui/home" />} />
        <Route path="/cli/*" element={<Terminal />} />
        <Route path="/gui/*" element={<Gui />} />
      </Routes>
    </Router>
  );
};

export default App;
