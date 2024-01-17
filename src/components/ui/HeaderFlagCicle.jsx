import styles from "./нeaderFlag.module.css";
import mapImage from "../common/svg/prapor 2.png";

const HeaderFlagCicle = () => {
  return (
    <div className={styles.header_cicle}>
      <img src={mapImage} alt={mapImage} />
    </div>
  );
};

export default HeaderFlagCicle;
