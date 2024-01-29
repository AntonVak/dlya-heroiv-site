import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FinishProjects.module.css";
import globalStyles from "../stylesGlobal/globalStyles.module.css";
import BtnRoundArrow from "./BtnRoundArrow";
import Img1 from "../common/img/finish_progect.png";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";

const FinishProjects = () => {
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
          
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
    ]
  };
  return (
    <section className={styles.finishProjects}>
      <div className={styles.container}>
        <div className={`${styles.title_block}`}>
          <div className={`${globalStyles.title} ${styles.finish_title}`}>
            Завершені проєкти
          </div>
          <div className={styles.btn_slider}>
          </div>
        </div>
        {/* <div className={styles.wrapper_block}>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow />
            </div>
          </div>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow />
            </div>
          </div>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow />
            </div>
          </div>
        </div> */}
        <Slider {...settings}>
          <div>
            <div className={styles.item_block}>
              <img src={Img1} alt="" />
              <div className={` ${styles.text_block}`}>
                <div className={` ${styles._text16B}`}>
                  Збір коштів на 20 FPV дронів
                </div>
                <BtnRoundArrow />
              </div>
            </div>
          </div>
          <div className={styles.item_block}>
            <img src={Img1} alt="" />
            <div className={` ${styles.text_block}`}>
              <div className={` ${styles._text16B}`}>
                Збір коштів на 20 FPV дронів
              </div>
              <BtnRoundArrow />
            </div>
          </div>
          <div>
            <div className={styles.item_block}>
              <img src={Img1} alt="" />
              <div className={` ${styles.text_block}`}>
                <div className={` ${styles._text16B}`}>
                  Збір коштів на 20 FPV дронів
                </div>
                <BtnRoundArrow />
              </div>
            </div>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default FinishProjects;
