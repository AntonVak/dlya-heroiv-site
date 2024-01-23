import styles from "./thankesPartners.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import CopyImg from "../common/svg/copy_black.png";

const ThankesPartners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${globalStyles.about_block_text}`}>
          Що ми пропонуємо
        </div>
        <div className={`${styles.title_wraper}`}>
          <div className={`${globalStyles.title} ${styles._title}`}>
            <span className={`${styles.title_color}`}>ВДЯЧНІСТЬ</span> НАШИМ
            ПАРТНЕРАМ
          </div>
          <div className={styles.btn_wraper}>
            <div className={` ${styles.button_thank}`}>
              <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
                подяки
              </div>
            </div>
            <div className={` ${styles.button_thank}`}>
              <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
                згадки в публікаціях в соц.мережах
              </div>
            </div>
            <div className={` ${styles.button_thank}`}>
              <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
                ваше лого на сайті фонду
              </div>
            </div>
            <div className={` ${styles.button_thank}`}>
              <div className={`${globalStyles.text14Fw4} ${styles._text14Fw4}`}>
                Інші шляхи розповсюдження інформації про партнера
              </div>
            </div>
          </div>
        </div>
        <div className={` ${styles.block_email}`}>
          <div className={` ${styles.text_email}`}>
            Для подальшої комунікації, відправте листа на адресу
          </div>
          <div className={` ${styles.button_copy}`}>
            <div className={`${globalStyles.text14Fw4}`}>
              {" "}
              dlya.heroiv.ukraine@gmail.com
              <div className={` ${styles.round_bg}`}>
                <img src={CopyImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankesPartners;
