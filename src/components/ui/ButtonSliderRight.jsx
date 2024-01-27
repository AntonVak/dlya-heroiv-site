import globalStyles from "../stylesGlobal/globalStyles.module.css";
import arrowLeft from "../common/svg/slider_left.png";

const ButtonSliderLeft = () => {
  return (
    <div className={`${globalStyles.round_bg_slide} `}>
      <img src={arrowLeft} alt="svg" />
    </div>
  );
};

export default ButtonSliderLeft;
