import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
