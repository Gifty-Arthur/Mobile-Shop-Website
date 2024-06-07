import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Mart from "./Components/Icons/Mart";
import Profile from "./Components/Icons/Profile";
import Home from "./Components/Pages/Home/Home";
import Category from "./Components/Pages/Home/Category";
import Arrival from "./Components/Pages/Home/Arrival";
import NewArrival from "./Components/Pages/Home/NewArrival";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <Arrival />
      <NewArrival />

      <Routes>
        <Route path="mart/" element={<Mart />} />
        <Route path="profile/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
