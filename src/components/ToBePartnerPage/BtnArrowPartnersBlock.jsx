import styles from "./partnersShip.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ArrowIcon from "../common/svg/arrow.svg";


const BtnArrowPartnersBlock = ({text, width, color}) => {
  return (
    <div className={`${globalStyles.button_arrow} ${styles._button}`} style={{maxWidth: `${width}`, backgroundColor:`${color}`}}>
       
        <div className={`${globalStyles.text14Fw4} ${styles.btn_text14Fw4}`}>{text}</div>
        <div className={`${globalStyles.round_bg}`}>
            <img src={ArrowIcon} alt="svg" />
        </div>
    </div>
  )
}

export default BtnArrowPartnersBlock