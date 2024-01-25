import styles from "./payInfo.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";

import copyImg from "../common/svg/copy.svg";

const FormUSD = () => {
  return (
    <div className={` ${styles.requisites_wrapper}`}>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            Назва компанії / company Name
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
            SWIFT Code
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
            {" "}
            PBANUA2X
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
            Назва банку / Name of the bank
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
            {" "}
            JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
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
            UA573052990000026005050571219
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
            Адреса компанії / Company address
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
            {" "}
            49000, УКРАЇНА, ОБЛ. ДНІПРОПЕТРОВСЬКА, М. ДНІПРО, ВУЛ. ВОЛОДИМИРА МОССАКОВСЬКОГО, Б. 8
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default FormUSD;
