import styles from "./payInfo.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";

import copyImg from "../common/svg/copy.svg";

const FormUAH = () => {
  return (
    <div className={` ${styles.requisites_wrapper}`}>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            Отримувач
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
            {" "}
            БО БФ ДЛЯ ГЕРОЇВ
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            Код одержувача:
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
            {" "}
            44872241
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            Банк:
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
            {" "}
            АТ КБ «ПриватБанк»
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            IBAN:
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.iban_text}`}>
            {" "}
            UA283052990000026000050563084
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default FormUAH;
