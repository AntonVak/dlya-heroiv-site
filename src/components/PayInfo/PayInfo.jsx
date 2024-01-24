import React from "react";
import ButtonCoffee from "./ButtonCoffee";
import styles from "./payInfo.module.css";
import Avatar1 from "../common/svg/Roman.png";
import Avatar2 from "../common/svg/Volodymir.png";
import monoSvg from "../common/svg/mono.png";
import paypalSvg from "../common/svg/paypal.png";
import bitcoinSvg from "../common/svg/bitcoin.png";
import bottom_line from "../common/svg/line_bottom.png";
import FormUAH from "./FormUAH";
import FormUSD from "./FormUSD";
import FormMono from "./FormMono";
import FormPaypal from "./FormPaypal";
import FormCrypto from "./FormCrypto";

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
            <div className={styles.btns_wrapper}>
              <ButtonCoffee name="Roman" avatar={Avatar1} />
              <ButtonCoffee name="Volodymyr" avatar={Avatar2} />
            </div>
          </div>
          <div className={styles.right_block}>
            <div className={styles.payInfo_requisites}>
              <div className={styles.border_logo}>
                <div className={styles.name_method}><span>Реквізити</span> UAH</div>
              </div>
              <div className={styles.border_logo}>
                <div className={styles.name_method}><span>Реквізити</span> USD</div>
              </div>
              <div className={styles.border_logo}>
                <img className={styles.mono_img}
                  src={monoSvg}
                  alt="mono img"
                />
              </div>
              <div className={styles.border_logo}>
                <img className={styles.paypal_img}
                  src={paypalSvg}
                  alt="paypalimg"
                />
              </div>
              <div className={styles.border_logo}>
                <img className={styles.bitcoin_img}
                  src={bitcoinSvg}
                  alt="bitcoin img"
                />
              </div>
            </div>
            <FormUAH />
            <FormUSD />
            <FormMono/>
            <FormPaypal/>
            <FormCrypto/>
          </div>
        </div>
      </div>
      <div>
        <img src={bottom_line} alt="svg" />
      </div>
      

    </section>
  );
};

export default PayInfo;
