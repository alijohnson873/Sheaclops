import React from "react";
import "./App.css";
import SheaCard from "./components/sheaCard/sheaCard";

function App() {
  return (
    <div className="App">
      <h1>Sheaclops</h1>
      <header className="App-header">
        <SheaCard rotate="430" />
        <SheaCard rotate="320" />
        <SheaCard rotate="790" />
        <SheaCard rotate="2000" />
      </header>
    </div>
  );
}

export default App;
