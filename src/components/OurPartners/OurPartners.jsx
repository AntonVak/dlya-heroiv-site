import React from "react";
import styles from "./ourPartners.module.css";
import Logo1 from "../common/svg/CharityLogo/1.png";
import Logo2 from "../common/svg/CharityLogo/2.png";
import Logo3 from "../common/svg/CharityLogo/3.png";
import Logo4 from "../common/svg/CharityLogo/4.png";
import Logo5 from "../common/svg/CharityLogo/5.png";
import Logo6 from "../common/svg/CharityLogo/6.png";
import Logo7 from "../common/svg/CharityLogo/7.png";
import Logo8 from "../common/svg/CharityLogo/8.png";
import Logo9 from "../common/svg/CharityLogo/9.png";
import ArrowR from "../common/svg/arrow_right.png";
import LogoCom1 from "../common/svg/CompanyLogo/1.png";
import LogoCom2 from "../common/svg/CompanyLogo/2.png";
import LogoCom3 from "../common/svg/CompanyLogo/3.png";
import LogoCom4 from "../common/svg/CompanyLogo/4.png";
import LogoCom5 from "../common/svg/CompanyLogo/5a.png";

const OurPartners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2>наші партнери</h2>
        <div className={styles.charity}>
          <h5>Благодійні організації</h5>
          <div className={styles.organization_logo}>
            <div className={styles.border_logo}>
              <img src={Logo1} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo2} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo3} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo4} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo5} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo6} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo7} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo8} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={Logo9} alt="" />
            </div>
            <div>
              <a href="">
                <img className={styles.border_logo} src={ArrowR} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.company}>
          <h5>Компанії</h5>
          <div className={styles.busines_logo}>
            <div className={styles.border_logo}>
              <img src={LogoCom1} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={LogoCom2} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={LogoCom3} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={LogoCom4} alt="" />
            </div>
            <div className={styles.border_logo}>
              <img src={LogoCom5} alt="" />
            </div>
            <div>
              <a href="">
                <img className={styles.border_logo} src={ArrowR} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
