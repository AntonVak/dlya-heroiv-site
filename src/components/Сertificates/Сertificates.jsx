import styles from "./certificates.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import SwipeRightIcon from "../ui/icons/SwipeRightIcon";
import certImg1 from "../common/svg/Сertificates/1.png";
import certImg2 from "../common/svg/Сertificates/2.png";
import certImg3 from "../common/svg/Сertificates/3.png";
import certImg4 from "../common/svg/Сertificates/4.png";

const Сertificates = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.block_title}>
          <div className={`${globalStyles.title} ${styles._title}`}>
            <span className={`${styles.title_color}`}>ми пишаємось</span> тим,
            що робимо
          </div>
          <div className={`${globalStyles.text12Fw4} ${styles.subtitle}`}>
            slider
          </div>
        </div>

        <div className={styles.block_certificates}>
          <div className={styles.border_logo}>
            <img src={certImg1} alt="img" />
          </div>
          <div className={styles.border_logo}>
            <img src={certImg2} alt="img" />
          </div>
          <div className={styles.border_logo}>
            <img src={certImg3} alt="img" />
          </div>
          <div className={styles.border_logo}>
            <img src={certImg4} alt="img" />
          </div>

          
        </div>
        <div className={styles.swipe_wrapper}>
          <SwipeRightIcon/>
          <div className={styles.swipeRight_title}>Гортай вліво</div>
        </div>
      </div>
    </section>
  );
};

export default Сertificates;
