import styles from "./payInfo.module.css";
import copyImg from "../common/svg/copy.svg";

const FormUAH = () => {
  return (
    <>
      <div className={styles.form_wrapper}>
        <input
          type="text"
          placeholder="Отримувач"
          className={styles.form_input}
        />
        
        <button className={styles.form_btn}>
          <img className={styles.form_svg} src={copyImg} alt="copy" />
        </button>
      </div>
      <label for="username">Click me</label> <input type="text" id="username" />
      <div className={styles.form_wrapper}>БО БФ ДЛЯ ГЕРОЇВ</div>
      
      <input type="number" className={styles.form_wrapper} />
    </>
  );
};

export default FormUAH;
