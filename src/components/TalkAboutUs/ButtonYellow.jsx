
import youTubeImg from "../common/svg/youtube.png";
import styles from "./talkaboutUs.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";

const ButtonYellow = () => {
  return (
    <button className={styles.button}>
      <div className={styles.cicle}>
        <img src={youTubeImg} alt="icon" />
      </div>
      <div className={`${globalStyles.text14B} ${styles.text_name}`}>Усі відео</div>
    </button>
  );
};

export default ButtonYellow;
