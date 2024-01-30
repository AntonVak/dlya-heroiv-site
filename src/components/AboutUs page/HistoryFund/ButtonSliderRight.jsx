import styles from "./historyFund.module.css";
import globalStyles from "../../stylesGlobal/globalStyles.module.css";
import arrowLeft from "../../common/svg/slider_left.png";

const ButtonSliderLeft = (props) => {
  const {  onClick } = props;
  return (
    <div className={`${globalStyles.round_bg_slide}  ${styles.arrow_left} ${styles.arrow_left_history}`} onClick={onClick}>
      <img src={arrowLeft} alt="svg" />
    </div>
  );
};

export default ButtonSliderLeft;
