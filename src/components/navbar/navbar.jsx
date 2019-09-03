import React, { Component } from "react";
import styles from "./navbar.module.scss";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <h1>NavBar</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="mainpage">Mainpage</Link>
      </div>
    );
  }
}

export default NavBar;
