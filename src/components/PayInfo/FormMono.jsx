import styles from "./payInfo.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";

import copyImg from "../common/svg/copy.svg";
import ButtonMono from "./ButtonMono";

const FormMono = () => {
  return (
    <div className={` ${styles.requisites_wrapper}`}>
      <div className={`${styles.mono_item}`}>
      <div className={` ${styles.block_left}`}>
        <div className={`${globalStyles.text18B} ${styles._text18B}`}>
          Банка ДЛЯ ГЕРОЇВ
        </div>
        </div>
        <div className={` ${styles.block_right}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            Цю банку створено для підтримки діяльності БФ "ДЛЯ ГЕРОЇВ", а також
            для короткострокових проєктів.Разом до ПЕРЕМОГИ! 💛💙
          </div>
          <div className={` ${styles.flex_wrapper}`}>
            <div className={` ${styles.card_wrapper}`}>
              <div className={`${globalStyles.text10Fw4} ${styles.text10Fw4}`}>
                Номер картки банки
              </div>
              <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
                {" "}
                5375 4112 0448 3437
              </div>
            </div>
            <div
              className={`${globalStyles.round_bg_copy} ${styles.round_mono}`}
            >
              <img src={copyImg} alt="svg" />
            </div>
          </div>
          <ButtonMono href="" />
        </div>
      </div>
      <div className={`${styles.mono_item}`}>
        <div className={` ${styles.block_left}`}>
          <div className={`${globalStyles.text18B} ${styles._text18B}`}>
            Банка На Дрони
          </div>
          <div className={`${styles.money_text}`}>
            <div className={`${globalStyles.text10Fw4}`}>Ціль</div>
            <div className={`${globalStyles.text18B} ${styles.price_text}`}>
              190 000 ₴
            </div>
          </div>
        </div>
        <div className={` ${styles.block_right}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            Долучайтесь! Військовим потрібно більше дронів, щоб і далі мати
            перевагу на полі бою і ефективно нищити окупантів!
          </div>
          <div className={` ${styles.flex_wrapper}`}>
            <div className={` ${styles.card_wrapper}`}>
              <div className={`${globalStyles.text10Fw4} ${styles.text10Fw4}`}>
                Номер картки банки
              </div>
              <div
                className={`${globalStyles.text14Fw4} ${styles.number_card}`}
              >
                {" "}
                5375 4112 1265 2312
              </div>
            </div>
            <div
              className={`${globalStyles.round_bg_copy} ${styles.round_mono}`}
            >
              <img src={copyImg} alt="svg" />
            </div>
          </div>
          <ButtonMono href="https://send.monobank.ua/jar/2ChrKiTWq6" />
        </div>
      </div>
      <div className={`${styles.mono_item}`}>
        <div className={` ${styles.block_left}`}>
          <div className={`${globalStyles.text18B} ${styles._text18B}`}>
            Банка На 3Д Друк
          </div>
          <div className={`${styles.money_text}`}>
            <div className={`${globalStyles.text10Fw4}`}>Ціль</div>
            <div className={`${globalStyles.text18B}  ${styles.price_text}`}>
              190 000 ₴
            </div>
          </div>
        </div>
        <div className={` ${styles.block_right}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            Друк 3D моделей на потреби ЗСУ. Нам потрібна Ваша допомога для
            закупівлі філаменту - матеріалу, з якого друкуються моделі.
          </div>
          <div className={` ${styles.flex_wrapper}`}>
            <div className={` ${styles.card_wrapper}`}>
              <div className={`${globalStyles.text10Fw4} ${styles.text10Fw4}`}>
                Номер картки банки
              </div>
              <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
                {" "}
                5375 4112 1066 5688
              </div>
            </div>
            <div
              className={`${globalStyles.round_bg_copy} ${styles.round_mono}`}
            >
              <img src={copyImg} alt="svg" />
            </div>
          </div>
          <ButtonMono href="https://send.monobank.ua/jar/2ZeEg4iHBg" />
        </div>
      </div>
    </div>
  );
};

export default FormMono;
