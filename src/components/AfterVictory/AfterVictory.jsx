import React from "react";
import styles from "./afterVictory.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";

const AfterVictory = () => {
  return (
    <section className={styles.afterVictory}>
      
        <div className={`${styles.victory_wrapper}`}>
          <div className={`${styles.block_left}`}>
            <div className={`${globalStyles.text14B}  ${styles.top_text}`}>
              ЩО БУДЕ З ФОНДОМ
            </div>
            <div className={`${globalStyles.title} ${styles.victory_title}`}>
              ПІСЛЯ ПЕРЕМОГИ УКРАЇНИ
            </div>
            <div className={`${globalStyles.text12Fw4}  ${styles.top_text12Fw4}`}>
            Коли переможемо — спочатку ми відсвяткуємо! Після ми продовжимо працювати над розбудовою країни та відновлення культурної, етничної та історичної спадщини. Нові концерти присвячені перемозі України вже залунаютьна великих, гучних майданчиках під відкритим мирним небом. Ми продовжимо свої гуманітарні місії фокусуючись на соціально не захищених верствах населення та медичних закладах. Внесемо свій вклад у відновлення постраждалих населених пунктів. Запустимо серію освітницьких програм, фокусуючись на актуальних темах післявоєнного часу. І ми точно будемо знаходити ще більше нових шляхівяк нашому фонду бути корисним у мирний час!
            </div>
            <div className={`${globalStyles.text14B}  ${styles.bolt_text14B}`}>
            Наші діти не мають більше бачити жахів війни, не мають прокидатися вночі від гуків сирен або звуків вибухів.
            </div>
            <div className={`${globalStyles.text12Fw4}  ${styles.text12Fw4_3}`}>
            Тож ми будемо працювати для того, щоб нове покоління мало змогу мріяти і втілювати всі свої найбажаніші мрії в своє життя!
            </div>
          </div>
          <div className={`${styles.block_right}`}></div>
        </div>
      
    </section>
  );
};

export default AfterVictory;
