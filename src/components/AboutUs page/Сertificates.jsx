import Slider from "react-slick";
import styles from "./certificates.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";
import SwipeRightIcon from "../ui/icons/SwipeRightIcon";
import certImg1 from "../common/svg/Сertificates/1.png";
import certImg2 from "../common/svg/Сertificates/2.png";
import certImg3 from "../common/svg/Сertificates/3.png";
import certImg4 from "../common/svg/Сertificates/4.png";

const Сertificates = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.block_title}>
          <div className={`${globalStyles.title} ${styles._title}`}>
            <span className={`${styles.title_color}`}>ми пишаємось</span> тим,
            що робимо
          </div>
        </div>

        <div className={styles.block_certificates}>
          <Slider {...settings}>
            <div>
              <div className={styles.border_logo}>
                <img src={certImg1} alt="img" />
              </div>
            </div>

            <div>
              <div className={styles.border_logo}>
                <img src={certImg2} alt="img" />
              </div>
            </div>
            <div>
              <div className={styles.border_logo}>
                <img src={certImg3} alt="img" />
              </div>
            </div>
            <div>
              <div className={styles.border_logo}>
                <img src={certImg4} alt="img" />
              </div>
            </div>
          </Slider>
        </div>
        <div className={styles.swipe_wrapper}>
          <SwipeRightIcon />
          <div className={styles.swipeRight_title}>Гортай вліво</div>
        </div>
      </div>
    </section>
  );
};

export default Сertificates;
