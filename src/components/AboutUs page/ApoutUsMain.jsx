import styles from "./ApoutUsMain.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import bgImg from "../common/img/about_us_bg.png";

const AboutUsMain = () => {
  return (
    <section className={styles.aboutUs_section}>
      <img className={styles.aboutUs_img} src={bgImg} alt="" />
      <div className={styles.container}>
        <div className={styles.block_title}>
          <div
            className={`${globalStyles.title_aboutUs} ${styles._title_aboutUs}`}
          >
            У нас
          </div>
          <span
            className={`${globalStyles.title_aboutUs} ${styles.title_color}`}
          >
            одна мета{" "}
          </span>
          <div
            className={`${globalStyles.title_aboutUs} ${styles._title_aboutUs}`}
          >
            на всіх
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.subtitle}`}>
            Наша місія - допомога Україні під час війни, а також допомога у
            відбудові після нашої перемоги!
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMain;
