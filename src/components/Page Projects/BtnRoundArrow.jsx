import styles from "./FinishProjects.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ArrowIcon from "../common/svg/arrow.svg";

const BtnRoundArrow = () => {
  return (
    <div className={`${styles.round_bg}`}>
      <img src={ArrowIcon} alt="svg" />
    </div>
  );
};

export default BtnRoundArrow;
