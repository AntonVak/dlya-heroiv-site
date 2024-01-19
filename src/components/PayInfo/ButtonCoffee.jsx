import React from "react";
import styles from "./payInfo.module.css";
import Arrow from "../common/svg/right-arrow-mini.png";

const ButtonCoffee = ({ name, avatar }) => {
  return (
    <button className={styles.btn_coffee}>
      <div>
        <img src={avatar} alt="Avatar" />
      </div>

      <p>{name}</p>
      <div className={styles.cicle}>
        <img src={Arrow} alt="arrow" />
      </div>
    </button>
  );
};

export default ButtonCoffee;
