import globalStyles from "../stylesGlobal/globalStyles.module.css";
import styles from "./ButtonToPartner.module.css";
import mapImage from "../common/svg/prapor 2.png";

const ButtonFoto = () => {
  return (
    <button className={`${styles.btn_foto} ${styles._button}`} >
      <div className={`${styles.round_bg_black}`}>
        <img src={mapImage} alt="svg" />
      </div>
      <span className={`${globalStyles.text14Fw4} ${styles.text_btn_foto}`}>
        Фотозвіт
      </span>
    </button>
  );
};

export default ButtonFoto;
