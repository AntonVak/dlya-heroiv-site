import React from "react";
import ButtonCoffee from "./ButtonCoffee";
import styles from "./payInfo.module.css";
import Avatar1 from "../common/svg/Roman.png";
import Avatar2 from "../common/svg/Volodymir.png";
import monoSvg from "../common/svg/mono.png";
import paypalSvg from "../common/svg/paypal.png";
import bitcoinSvg from "../common/svg/bitcoin.png";
import FormUAH from "./FormUAH";

const PayInfo = () => {
  return (
    <section className={styles.payInfo}>
      <div className={styles.container}>
        <div className={styles.payInfo_wraper}>
          <div className={styles.left_block}>
            <h2>Підтримайте НАШ БЛАГОДІЙНИЙ ФОНД</h2>
            <p>
              Ми регулярно ведемо звітність про нашу діяльність, тож ви можете
              бути впевнені, що гроші підуть на добру справу
            </p>

            <h5>Buy Me A Coffee:</h5>
            <div className={styles.btns_coffee}>
              <ButtonCoffee name="Roman" avatar={Avatar1} />
              <ButtonCoffee name="Volodymyr" avatar={Avatar2} />
            </div>
          </div>
          <div className={styles.right_block}>
            <div className={styles.payInfo_requisites}>
              <div className={styles.border_logo}>
                <div className={styles.name_method}>Реквізити UAH</div>
              </div>
              <div className={styles.border_logo}>
                <div className={styles.name_method}>Реквізити USD</div>
              </div>
              <div className={styles.border_logo}>
                <img
                  style={{ width: "70px", height: "30px" }}
                  src={monoSvg}
                  alt="mono img"
                />
              </div>
              <div className={styles.border_logo}>
                <img
                  style={{ width: "60px", height: "46px" }}
                  src={paypalSvg}
                  alt="paypalimg"
                />
              </div>
              <div className={styles.border_logo}>
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={bitcoinSvg}
                  alt="bitcoin img"
                />
              </div>
            </div>
            <FormUAH />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayInfo;
