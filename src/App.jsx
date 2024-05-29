import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Mart from "./Components/Icons/Mart";
import Profile from "./Components/Icons/Profile";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <Routes>
        <Route path="mart/" element={<Mart />} />
        <Route path="profile/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
