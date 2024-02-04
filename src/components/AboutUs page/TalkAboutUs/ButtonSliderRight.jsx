import styles from "./talkaboutUs.module.css";
import globalStyles from "../../stylesGlobal/globalStyles.module.css";
import arrowLeft from "../../common/svg/slider_left.png";

const ButtonSliderRight = (props) => {
  const {  onClick } = props;
  return (
    <div className={`${globalStyles.round_bg_slide}  ${styles.arrow_left} `} onClick={onClick}>
      <img src={arrowLeft} alt="svg" />
    </div>
  );
};

export default ButtonSliderRight;
