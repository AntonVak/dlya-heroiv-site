import globalStyles from "../stylesGlobal/globalStyles.module.css";
import styles from "./ButtonToPartner.module.css";
import mapImage from "../common/svg/prapor 2.png";

const ButtonToPartner = () => {
  return (
    <button className={`${styles.btn_topartner} ${styles._button}`} >
      <div className={`${styles.round_bg}`}>
        <img src={mapImage} alt="svg" />
      </div>
      <span className={`${globalStyles.text14Fw4} ${styles.text14Fw4_btn}`}>
        Стати партнером
      </span>
    </button>
  );
};

export default ButtonToPartner;
