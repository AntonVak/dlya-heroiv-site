import { useState } from "react";
import styles from "./BurgerButton.module.css";

const BurgerButton = ({ handleNavClick}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    handleNavClick(); 
  };
  return (
    <button
      className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
      onClick={handleMenu}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  );
};

export default BurgerButton;
