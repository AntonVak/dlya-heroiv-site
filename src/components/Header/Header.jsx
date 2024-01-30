import NavMenu from "./NavMenu";
import styles from "./Header.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ButtonToPartner from "./ButtonToPartner";
import HeaderBgIcon from "../ui/icons/HeaderBgIcon";
import banner1 from "../common/img/Man in virtual glasses.png";
import banner2 from "../common/img/desktop_banner_2.png";
import Slider from "react-slick";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ButtonSliderLeft />,
    prevArrow: <ButtonSliderRight />,
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 764,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <header className={styles.header}>
      <NavMenu />
      <Slider {...settings}>
        <div>
          <div className={styles.container}>
            <div
              className={`${globalStyles.header_title} ${styles.header_title1}`}
            >
              для
            </div>
            <div
              className={`${globalStyles.header_title} ${styles.header_title2}`}
            >
              героїв
            </div>
            <div className={`${globalStyles.text16B} ${styles.header_text16B}`}>
              ДОПОМАГАЄМО ГЕРОЯМ УКРАЇНИ НА ФРОНТІ І В ТИЛУ
            </div>
            <div>
              <ButtonToPartner />
            </div>
            <div className={` ${styles.header_flex}`}>
              <div className={` ${styles.header_banner1}`}>
                <img src={banner1} alt="banner_img" />
              </div>
              <div className={` ${styles.header_icon}`}>
                <HeaderBgIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.container}>
              <div
                className={`${globalStyles.header_title} ${styles.header_title1}`}
              >
                для
              </div>
              <div
                className={`${globalStyles.header_title} ${styles.header_title2}`}
              >
                героїв
              </div>
              <div
                className={`${globalStyles.text16B} ${styles.header_text16B}`}
              >
                Допомагаємо героям медичних закладів
              </div>
              <div>
                <ButtonToPartner />
              </div>
              <div className={` ${styles.header_banner2}`}>
                <img src={banner2} alt="banner_img" />
              </div>
              <div className={` ${styles.header_icon}`}>
                <HeaderBgIcon />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </header>
  );
};

export default Header;
