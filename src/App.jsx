import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>Fun facts about React!</h1>
        <ul>
          <li>Was first realease in 2013</li>
          <li>Was originally created by Jordan Walker</li>
          <li>Was well over 200k stars on Github</li>
          <li>Is maintaned by Meta </li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <footer>
        <small>@ 2025 Karatu development. All right reserved</small>
      </footer>
    </>
  );
}

export default App;
