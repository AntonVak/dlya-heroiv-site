import styles from "./payInfo.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import copyImg from "../common/svg/copy.svg";
import BtcImg from "../common/svg/Crypto/Ellipse 8.png";
import UsdcImg from "../common/svg/Crypto/Ellipse 1.png";
import SqlImg from "../common/svg/Crypto/Ellipse 2.png";
import DogeImg from "../common/svg/Crypto/Ellipse 3.png";
import EthImg from "../common/svg/Crypto/Ellipse 4.png";
import BnbImg from "../common/svg/Crypto/Ellipse 5.png";
import MaticImg from "../common/svg/Crypto/Ellipse 6.png";
import AdaImg from "../common/svg/Crypto/Ellipse 7.png";

const FormCrypto = () => {
  return (
    <div className={` ${styles.requisites_wrapper}`}>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={BtcImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          {/* <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            BTC
          </div> */}
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            bc1qlnu4sy5r3acf6w27t76tjke2waswpkwkmf00nj
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={UsdcImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            USDC
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            0x1B32569d73e87BA02C97aeE43e0131Fd2a36e02D
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={SqlImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            SQL
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            CtjibbCY86g2U1nWgLWp6VUd4kwcKwLefYiBmh2kNuuF
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={DogeImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            DOGE
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            bc1qlnu4sy5r3acf6w27t76tjke2waswpkwkmf00nj
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={EthImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            ETH
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            0x8C6B773B552F435a5869e02f9Ed9232F25636305
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={BnbImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            BNB
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            0x8C6B773B552F435a5869e02f9Ed9232F25636305
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={MaticImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            MATIC
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            0x8C6B773B552F435a5869e02f9Ed9232F25636305
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
      <div className={`${globalStyles.button_copy} ${styles._button_copy}`}>
        <img src={AdaImg} alt="svg" />
        <div className={` ${styles.text_wrapper}`}>
          <div className={`${globalStyles.text10Fw4} ${styles._text10Fw4}`}>
            {" "}
            ADA
          </div>
          <div className={`${globalStyles.text14Fw4} ${styles.crypto_text}`}>
            {" "}
            addr1q8xx5js0fnv8yugdnkkw98k6f9n3llgmsjdq4wjdhwyhveu29msj5q7ch3muxeps2qa00wvhrewn7qw9wukvztqyc5hq6vm3xd
          </div>
        </div>
        <div className={`${globalStyles.round_bg_copy}`}>
          <img src={copyImg} alt="svg" />
        </div>
      </div>
    </div>
  );
};

export default FormCrypto;
