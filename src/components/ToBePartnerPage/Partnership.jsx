import styles from "./partnersShip.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import BtnArrowPartnersBlock from "./BtnArrowPartnersBlock";

const PartnersShip = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${globalStyles.about_block_text}`}>
          Варіанти партнерства
        </div>
        <div className={`${globalStyles.title} ${styles._title}`}>
          Обирайте свій формат допомоги
        </div>
        <div className={`${globalStyles.text12Fw4} ${styles._text12Fw4}`}>
          Ставайте партнером-меценатом будь-якого напряму допомоги
        </div>

        <div className={styles.block_wraper}>
          <BtnArrowPartnersBlock
            text="гуманітарна допомога для потреб ЗСУ"
            width="310px"
          />
          <BtnArrowPartnersBlock
            text="гуманітарна допомога для потреб постраждалого населення України"
            width="420px"
          />
          <BtnArrowPartnersBlock
            text="фінансова допомога для підтримки діяльності фонду"
            width="530px"
          />
          <BtnArrowPartnersBlock
            text="фінансова допомога під конкретний благодійний проєкт"
            width="420px"
          />
          <BtnArrowPartnersBlock
            text="фінансова допомога під конкретний благодійний проєкт"
            width="530px"
          />
          <BtnArrowPartnersBlock className={styles.btn_yellow} text="Запропонувати свій формат" width="310px" color="var(--yellow)" />
        </div>
      </div>
    </section>
  );
};

export default PartnersShip;
