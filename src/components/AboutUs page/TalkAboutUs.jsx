import styles from "./talkaboutUs.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ButtonYellow from "./ButtonYellow";
import videoImg1 from "../common/svg/video1.png";
import videoImg2 from "../common/svg/video2.png";
import ArrowIcon from "../common/svg/arrow.svg";

const TalkAboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.section_wraper}`}>
          <div className={styles.block_left}>
            <div className={`${globalStyles.title} ${styles._title}`}>
              про нас говорять
            </div>
            <div className={`${globalStyles.text12Fw4} ${styles.subtitle}`}>
              Деякі з наших інтерв’ю у яких ми розповідаємо про останні події,
              ділимося новинами та знайомимоз командою нашого фонду
            </div>

            <div className={styles.block_button}>
              <ButtonYellow />
              <div>button slider</div>
            </div>
          </div>

          <div className={styles.block_right}>
            <div className={styles.video_content}>
              <div className={styles.img_content}>
                <img src={videoImg1} alt="" />
              </div>
              <div className={` ${styles.round_button}`}>
                <img src={ArrowIcon} alt="" />
              </div>

              <div className={`${globalStyles.text14B} ${styles._text14B}`}>
                Інтерв’ю з “Відкритого”
              </div>
            </div>
            <div className={styles.video_content}>
              <img src={videoImg2} alt="" />
              <div className={` ${styles.round_button}`}>
                <img src={ArrowIcon} alt="" />
              </div>
              <div className={`${globalStyles.text14B} ${styles._text14B}`}>
                Інтерв’ю з “Відкритого”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkAboutUs;
