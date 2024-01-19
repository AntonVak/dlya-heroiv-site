import styles from "./ourTeam.module.css";
import globalStyles from '../stylesGlobal/globalStyles.module.css';
import Foto0 from "../common/svg/OurTeam/0.png";

const OurTeam = () => {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.container}>
        <div>
          <div className={`${globalStyles.title}`}>наша команда</div>
        </div>
        <div className={styles.block_foto}>
          <div className={styles.main_foto}>
            <div className={styles.border_big}>
              <img src={Foto0} alt="" />
              <div className={`${globalStyles.text16B} ${styles.text16B_name} `}>Роман</div>
              <div className={globalStyles.text12Fw4}>Засновник фонду</div>
            </div>
          </div>
          <div className={styles.team_foto}>
            <div className={styles.top_foto}>
              <div className={styles.border}>
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.bottom_foto}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
