import NavMenu from "./NavMenu";
import styles from "./Header.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ButtonToPartner from "./ButtonToPartner";
import ButtonDetail from "./ButtonDetail";
import HeaderBgIcon from "../ui/icons/HeaderBgIcon";
import banner1 from "../common/img/Man in virtual glasses.png";
import banner2 from "../common/img/desktop_banner_2.png";
import banner3 from "../common/img/desktop_banner_3.png";
import banner4 from "../common/img/desktop_banner_4.png";
import banner5 from "../common/img/desktop_banner_5.png";
import banner6 from "../common/img/desktop_banner_6.png";
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
      <div className={` ${styles.header_icon}`}>
        <HeaderBgIcon />
      </div>
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
              <ButtonToPartner name="Стати партнером" />
            </div>

            <div className={` ${styles.header_banner1}`}>
              <img src={banner1} alt="banner_img" />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.position_container}>
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
                <ButtonToPartner name="Стати партнером" />
              </div>
              <div className={` ${styles.header_banner2}`}>
                <img src={banner2} alt="banner_img" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.position_container}>
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
                Надаємо гуманітарну допомогу постраждалому населенню
              </div>
              <div>
                <ButtonToPartner name="Стати партнером" />
              </div>

              <div className={` ${styles.header_banner3}`}>
                <img src={banner3} alt="banner_img" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.position_container}>
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
                Проводимо благодійні концерти на підтримку ЗСУ
              </div>
              <div>
                <ButtonToPartner name="Стати партнером" />
              </div>

              <div className={` ${styles.header_banner4}`}>
                <img src={banner4} alt="banner_img" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.position_container}>
            <div className={styles.container}>
              <div
                className={`${globalStyles.header_title} ${styles.header_title1}`}
              >
                Дрони
              </div>
              <div
                className={`${globalStyles.header_title} ${styles.header_title2}`}
              >
                для ЗСУ
              </div>
              <div
                className={`${globalStyles.text16B} ${styles.header_text16B}`}
              >
                Розвиваємо напрям закупівлі дронів на потреби ЗСУ
              </div>
              <div className={` ${styles.btn_flex}`}>
                <div>
                  <ButtonToPartner name="Зробити донат" />
                </div>
                <ButtonDetail name="Детальніше" />
              </div>

              <div className={` ${styles.header_banner5}`}>
                <img src={banner5} alt="banner_img" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.position_container}>
            <div className={styles.container}>
              <div
                className={`${globalStyles.header_title} ${styles.header_title1_3D}`}
              >
                3D моделі
              </div>
              <div
                className={`${globalStyles.header_title} ${styles.header_title2_3D}`}
              >
                для ЗСУ
              </div>
              <div
                className={`${globalStyles.text16B} ${styles.header_text16B}`}
              >
                Друкуємо 3D моделі на потреби ЗСУ
              </div>
              <div className={` ${styles.btn_flex_3D}`}>
                <div>
                  <ButtonToPartner name="Зробити донат" />
                </div>
                <ButtonDetail name="Детальніше" />
              </div>

              <div className={` ${styles.header_banner6}`}>
                <img src={banner6} alt="banner_img" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </header>
  );
};

export default Header;
