import styles from "./payInfo.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";

import copyImg from "../common/svg/copy.svg";

const FormPaypal = () => {
  return (
    <div className={` ${styles.requisites_wrapper}`}>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            Пошта
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.paypal_email}`}>
            {" "}
            dlya.heroiv.ukraine@gmail.com
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default FormPaypal;
