import React, { Component } from "react";

import "./App.css";
import SheaCard from "./components/sheaCard/sheaCard";
import "firebase/auth";
import { Router, Link } from "@reach/router";
import NavBar from "./components/navbar/navbar";

const Home = () => {
  return (
    <div>
      <h2>You are on the homepage</h2>
    </div>
  );
};

const MainPage = () => {
  return (
    <div>
      <h2>You are on the main page</h2>
      <header className="App-header">
        <SheaCard rotate="430" />
        <SheaCard rotate="320" />
        <SheaCard rotate="790" />
        <SheaCard rotate="2000" />
      </header>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Home path="/" />
          <MainPage path="mainpage" />
        </Router>
      </div>
    );
  }
}

export default App;
