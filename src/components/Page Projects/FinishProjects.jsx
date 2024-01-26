import styles from "./FinishProjects.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import BtnRoundArrow from "./BtnRoundArrow";
import Img1 from "../common/img/finish_progect.png";

const FinishProjects = () => {
  return (
    <section className={styles.finishProjects}>
      <div className={styles.container}>
      <div className={`${styles.title_block}`}>
        <div className={`${globalStyles.title} ${styles.finish_title}`}>
          Завершені проєкти
        </div>
        <div>slider</div>
        </div>
        <div className={styles.wrapper_block}>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow/>
            </div>
          </div>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow/>
            </div>
          </div>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinishProjects;
