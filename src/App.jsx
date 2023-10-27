import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ScrollToTop from "./components/utils/ScrollToTop";
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import Main from "./pages/Main";
import SelectedParticipants from "./pages/SelectedParticipants";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/hackers" element={<SelectedParticipants />} />
    </Routes>
  );
};

export default App;
