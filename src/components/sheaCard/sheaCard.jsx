import React, { Component } from "react";
import styles from "./sheaCard.module.scss";
import shea from "../images/Shea.png";
import eye1 from "../images/left.png";
import eye2 from "../images/right.png";
// import PropTypes from "prop-types";

class SheaCard extends Component {
  state = { isClicked: false };

  clickImg = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    const eyeRote = { transform: `rotate(${this.props.rotate}deg)` };
    const eyeNormal = { transform: `rotate(0deg)` };
    const rotateEyes = this.state.isClicked ? eyeRote : eyeNormal;
    return (
      <section className={styles.sheaCard} onClick={this.clickImg}>
        <img src={shea} className={styles.sheaIMG} />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye1} `}
          style={rotateEyes}
        />
        <img
          src={eye2}
          className={`${styles.eye} ${styles.eye1} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye2} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye3} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye4} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye5} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye6} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye7} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye8} `}
          style={rotateEyes}
        />
        <img
          src={eye1}
          className={`${styles.eye} ${styles.eye9} `}
          style={rotateEyes}
        />
      </section>
    );
  }
}

export default SheaCard;
