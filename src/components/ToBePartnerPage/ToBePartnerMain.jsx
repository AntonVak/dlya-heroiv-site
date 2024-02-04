import styles from "./ToBePartnerMain.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import bgImg from "../common/img/to_be_partners_bg.png";

const ToBePartnerMain = () => {
  return (
    <section className={styles.ToBePartner_section}>
      {/* <img className={styles.ToBePartner_img} src={bgImg} alt="" /> */}
      <div className={styles.container}>
        <div className={styles.block_title}>
          <div
            className={`${globalStyles.title_aboutUs} ${styles._title_aboutUs}`}
          >
            наближаймо перемогу 
          </div>
          <span
            className={`${globalStyles.title_aboutUs} ${styles.title_color}`}
          >
            разом
          </span>
          
          <div className={`${globalStyles.text14Fw4} ${styles.subtitle}`}>
          Фонд “Для Героїв” буде радий розширити коло партнерств.
          </div>
        </div>
        <img className={styles.ToBePartner_img} src={bgImg} alt="" />
      </div>
    </section>
  );
};

export default ToBePartnerMain;
