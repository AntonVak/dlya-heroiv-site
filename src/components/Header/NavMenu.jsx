import React, { useState } from "react";
import styles from "./navMenu.module.css";
import LogoIcon from "../common/svg/Group.png";
import TwitterIcon from "../ui/icons/TwitterIcon";
import FacebookIcon from "../common/svg/Social/Facebook.svg";
import InstagramIcon from "../common/svg/Social/Instagram.png";
import YoutubeIcon from "../common/svg/Social/YouTube.png";
import TiktokIcon from "../common/svg/Social/Tiktok.png";
import web from "../common/svg/www.svg";
import HeaderFlagCicle from "../ui/HeaderFlagCicle";
import BurgerButton from "./BurgerButton";
import ButtonToPartner from "./ButtonDetail";

const NavMenu = ({ isNavActive, handleNavClick }) => {
  console.log(isNavActive);

  return (
    <nav className={styles.nav_menu}>
      <div className={styles.container}>
        <div className={styles.header_row}>
          <div className={styles.header_logo}>
            <a href="#">
              <img src={LogoIcon} alt="Logo" />
            </a>
          </div>
          <div
            className={`${styles.header_menu} ${
              isNavActive ? styles.activ : ""
            }`}
          >
            <div className={`${styles.header_nav} `}>
              <a href="#">
                <div className={styles.header_nav_text}>Про фонд</div>
              </a>
              <a href="#">
                <div className={styles.header_nav_text}>Проєкти</div>
              </a>
              <a href="*">
                <div className={styles.header_nav_text}>Звітність</div>
              </a>
              <a href="*">
                <div className={styles.header_nav_text}>Стати партнером</div>
              </a>
            </div>
            <div className={styles.vertical_line}></div>
            <div className={styles.header_support}>
              <HeaderFlagCicle />
              <a href="#">
                <div
                  className={`${styles.header_nav_text} ${styles.color_text}`}
                >
                  Підтримати
                </div>
              </a>
            </div>

            <div className={styles.vertical_line}></div>
            <div className={styles.header_social}>
              <a href="#" className={styles.icon_social}>
                <TwitterIcon />
              </a>
              <a href="#">
                <img src={FacebookIcon} alt="" />
              </a>
              <a href="#">
                <img src={InstagramIcon} alt="" />
              </a>
              <a href="#">
                <img src={YoutubeIcon} alt="" />
              </a>
              <a href="#">
                <img src={TiktokIcon} alt="" />
              </a>
            </div>
            <div className={styles.vertical_line}></div>
            <div className={styles.header_web}>
              <img src={web} alt="" />
            </div>
            <div className={styles.burger_wrapper}>
              <BurgerButton handleNavClick={handleNavClick} />
            </div>
          </div>
        </div>
      </div>
      {/* Burger Menu */}
      <div
        className={`${styles.mobile_menu} ${isNavActive ? styles.active2 : ""}`}
      >
        <div className={`${styles.header_nav2} `}>
          <a href="#">
            <div className={styles.header_nav_text}>Про фонд</div>
          </a>
          <a href="#">
            <div className={styles.header_nav_text}>Проєкти</div>
          </a>
          <a href="*">
            <div className={styles.header_nav_text}>Звітність</div>
          </a>
          <a href="*">
            <div className={styles.header_nav_text}>Стати партнером</div>
          </a>
        </div>
        <div className={`${styles.btn_active} `}>
          <ButtonToPartner name="Підтримати" />
        </div>
        <div className={styles.social_burger}>
          <a href="#" className={styles.icon_social}>
            <TwitterIcon />
          </a>
          <a href="#">
            <img src={FacebookIcon} alt="" />
          </a>
          <a href="#">
            <img src={InstagramIcon} alt="" />
          </a>
          <a href="#">
            <img src={YoutubeIcon} alt="" />
          </a>
          <a href="#">
            <img src={TiktokIcon} alt="" />
          </a>
        </div>
        <div className={styles.language_burger}>
          <a href="">UA</a>
          <a href="">ENG</a>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
