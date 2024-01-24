import globalStyles from "../stylesGlobal/globalStyles.module.css";
import styles from "./payInfo.module.css";
import mono_white from "../common/svg/mono_white.png";

const ButtonMono = ({ href }) => {
  return (
    <>
      <a href={href} target="_blank" className={`${styles.button_link}`}>
        <span className={`${styles.round_bg_mono}`}>
          <img src={mono_white} alt="svg" />
          
        </span>
        <span className={`${globalStyles.text14Fw4} ${styles.text14Fw4_mono}`}>Посилання на банку</span> 
      </a>
    </>
  );
};

export default ButtonMono;
