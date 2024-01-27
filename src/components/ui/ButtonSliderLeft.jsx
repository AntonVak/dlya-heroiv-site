import globalStyles from "../stylesGlobal/globalStyles.module.css";
import arrowRight from "../common/svg/slider_right.png";

const ButtonSliderRight = () => {
  return (
    <div className={`${globalStyles.round_bg_slide} ${globalStyles.round_slide}`}>
      <img src={arrowRight} alt="svg" />
    </div>
  );
};

export default ButtonSliderRight;
