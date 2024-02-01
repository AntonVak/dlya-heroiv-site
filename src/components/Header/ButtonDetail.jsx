import globalStyles from "../stylesGlobal/globalStyles.module.css";
import styles from "./ButtonStyles.module.css";
import mapImage from "../common/svg/prapor 2.png";

const ButtonToPartner = ({href, name}) => {
  
  return (
    <a href={href} className={`${styles.btn_topartner} ${styles.donat_button}`}  >
    
      <div className={`${styles.round_bg}`}>
        <img src={mapImage} alt="svg" />
      </div>
      <span className={`${globalStyles.text14Fw4} ${styles.donat_text14Fw4}`}>
        {name}
      </span>
    </a>
  );
};

export default ButtonToPartner;
