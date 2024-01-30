import React from "react";
import Slider from "react-slick";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";
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
import CompanyLogoSlider from "./CompanyLogoSlider";

const OurPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ButtonSliderLeft />,
    prevArrow: <ButtonSliderRight />,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2>наші партнери</h2>
        <div className={styles.charity}>
          <h5>Благодійні організації</h5>
          <div className={styles.organization_logo}>
            <Slider {...settings}>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo1} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo2} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo3} alt="" />
                </div>
              </div>

              <div>
                <div className={styles.border_logo}>
                  <img src={Logo4} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo5} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo6} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo7} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo8} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={Logo9} alt="" />
                </div>
              </div>
              <div>
                <a href="">
                  <img className={styles.border_logo} src={ArrowR} alt="" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        <div className={styles.company}>
          <h5>Компанії</h5>
          <div className={styles.busines_logo}>
            <CompanyLogoSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
