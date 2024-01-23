import styles from "./aboutFund.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ArrowIcon from "../common/svg/arrow.svg";


const ButtonWithArrow = () => {
  return (
    <div className={`${globalStyles.button_arrow} ${styles._button}`}>
        <div className={`${globalStyles.text14B} ${styles.top_text}`}>Напишіть на нашу адресу</div>
        <div className={`${globalStyles.text14Fw4} ${styles.bottom_text}`}>dlya.heroiv.ukraine@gmail.com</div>
        <div className={`${globalStyles.round_bg} ${styles._round_bg}`}>
            <img src={ArrowIcon} alt="svg" />
        </div>
    </div>
  )
}

export default ButtonWithArrow