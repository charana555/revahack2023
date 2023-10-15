import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import SelectedParticipants from "./pages/SelectedParticipants";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/selectedParticipants" element={<SelectedParticipants />} />
    </Routes>
  );
};

export default App;
