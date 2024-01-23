import styles from "./aboutFund.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ButtonWithArrow from "./ButtonWithArrow";
import Img1 from "../common/img/Fund_img1.png";
import Img2 from "../common/img/Fund_img2.png";

const AboutFund = () => {
  return (
    <section className={styles.for_what}>
      <div className={styles.container}>
        <div className={`${globalStyles.about_block_text}`}>Про фонд</div>
        <div className={`${globalStyles.title} ${styles._title}`}>
          Ми віримо, що єднання і взаємна допомога -{" "}
          <span className={`${styles.title_color}`}>
            ключ до нашої перемоги
          </span>
        </div>
        <div className={styles.block_wraper}>
          <div className={styles.block_left}>
            <div className={`${globalStyles.text18B} ${styles._text18B}`}>
              Якщо ви:
            </div>
            <div className={styles.content_wraper}>
              <div className={styles.block_text}>
                <li className={`${globalStyles.text12Fw4}`}>
                  зацікавились нашими напрямами і благодійними проєктами
                </li>
                <li
                  className={`${globalStyles.text12Fw4} ${styles._text12Fw4}`}
                >
                  маєте товари першої необхідності, продукти, гігієну, медичні
                  засоби тощо, і не знаєте куди їх відправити
                </li>
              </div>
              <div className={styles.block_text}>
                <li className={`${globalStyles.text12Fw4}`}>
                  бажаєте передати з-за кордону гуманітарну допомогу
                </li>
                <li
                  className={`${globalStyles.text12Fw4} ${styles._text12Fw4}`}
                >
                  хочете підтримати діяльність нашого фонду
                </li>
              </div>
            </div>
            <ButtonWithArrow />
          </div>
          <div className={styles.block_right}>
            {/* <div className={styles.img_foto}></div> */}
            
            < img className={styles.img_foto1} src={Img1} alt="" />
            <img className={styles.img_foto2} src={Img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFund;
