import { useState } from "react";
import styles from "./BurgerButton.module.css";

const BurgerButton = ({ handleNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  function addStylesToBody() {
    const body = document.body;
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }
  function removeStylesFromBody() {
    var body = document.body;
    body.style.height = "";
    body.style.overflow = "";
  }

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    handleNavClick();
    !isOpen ? addStylesToBody() : removeStylesFromBody();
    
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
