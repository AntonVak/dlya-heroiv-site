import styles from './BurgerButton.module.css';

const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <button
      className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </button>
  );
};

export default BurgerButton;
