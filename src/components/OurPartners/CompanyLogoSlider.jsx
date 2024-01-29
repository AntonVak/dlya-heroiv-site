import Slider from "react-slick";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";
import styles from "./ourPartners.module.css";

import ArrowR from "../common/svg/arrow_right.png";
import LogoCom1 from "../common/svg/CompanyLogo/1.png";
import LogoCom2 from "../common/svg/CompanyLogo/2.png";
import LogoCom3 from "../common/svg/CompanyLogo/3.png";
import LogoCom4 from "../common/svg/CompanyLogo/4.png";
import LogoCom5 from "../common/svg/CompanyLogo/5a.png";

const CompanyLogoSlider = () => {
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
              slidesToShow: 6,
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
    <Slider {...settings}>
              <div>
                <div className={styles.border_logo}>
                  <img src={LogoCom1} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={LogoCom2} alt="" />
                </div>
              </div>

              <div>
                <div className={styles.border_logo}>
                  <img src={LogoCom3} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={LogoCom4} alt="" />
                </div>
              </div>
              <div>
                <div className={styles.border_logo}>
                  <img src={LogoCom5} alt="" />
                </div>
              </div>
              <div>
                <a href="">
                  <img className={styles.border_logo} src={ArrowR} alt="" />
                </a>
              </div>
            </Slider>
  )
}

export default CompanyLogoSlider;