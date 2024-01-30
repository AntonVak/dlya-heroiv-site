import NavMenu from "./NavMenu";
import styles from "./navMenu.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";


const Header = () => {
  return (
    <div className={styles.header}>
        <NavMenu/>
        <div className={`${globalStyles.header_title} ${styles.header_title1}`}>для</div>
        <div className={`${globalStyles.header_title} ${styles.header_title2}`}>героїв</div>
        <div className={`${globalStyles.text16B} ${styles.header_text16B}`}>ДОПОМАГАЄМО ГЕРОЯМ УКРАЇНИ НА ФРОНТІ І В ТИЛУ</div>
        <div></div>
    </div>
  )
}

export default Header