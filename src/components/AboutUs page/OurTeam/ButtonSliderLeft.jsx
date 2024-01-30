import styles from "./ourTeam.module.css";
import globalStyles from "../../stylesGlobal/globalStyles.module.css";
import arrowRight from "../../common/svg/slider_right.png";

const ButtonSliderRight = (props) => {
  const {  onClick } = props;
  return (
    <div className={`${globalStyles.round_bg_slide} ${styles.arrow_right} `} onClick={onClick}>
      <img src={arrowRight} alt="svg" />
    </div>
  );
};

export default ButtonSliderRight;
