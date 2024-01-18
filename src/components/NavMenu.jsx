import React from "react";
import styles from "./navMenu.module.css";
import LogoIcon from "./common/svg/logo (1).svg";
import TwitterIcon from "./ui/icons/TwitterIcon";
import FacebookIcon from "./common/svg/Social/Facebook.svg";
import InstagramIcon from "./common/svg/Social/Instagram.png";
import YoutubeIcon from "./common/svg/Social/YouTube.png";
import TiktokIcon from "./common/svg/Social/Tiktok.png";
import web from "./common/svg/www.svg";
import HeaderFlagCicle from "./ui/HeaderFlagCicle";

const NavMenu = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header_row}>
          <div className={styles.header_logo}>
            <a href="#">
              <img src={LogoIcon} alt="Logo" />
            </a>
          </div>
          <div className={styles.header_menu}>
            <div className={styles.header_nav}>
              <a href="#">
                <div>Про фонд</div>
              </a>
              <a href="#">
                <div>Проєкти</div>
              </a>
              <a href="*">
                <div>Звітність</div>
              </a>
              <a href="*">
                <div>Стати партнером</div>
              </a>
            </div>

            <div className={styles.header_support}>
              <HeaderFlagCicle />
              <a href="#">
                <div>Підтримати</div>
              </a>
            </div>
            <div className={styles.header_social}>
            
              <a href="#">
              <TwitterIcon/>
                {/* <img src="" alt="Twitter" /> */}
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
            <div className={styles.header_web}>
                <img src={web} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NavMenu;