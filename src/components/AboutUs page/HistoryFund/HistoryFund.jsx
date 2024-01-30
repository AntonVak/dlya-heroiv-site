import styles from "./historyFund.module.css";
import globalStyles from "../../stylesGlobal/globalStyles.module.css";
import SwipeRightIcon from "../../ui/icons/SwipeRightIcon";
import flag_round from "../../common/svg/flag_round.png";
import Slider from "react-slick";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";

const HistoryFund = () => {
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.ourTeam}>
      <div className={styles.container}>
        <div>
          <div className={`${globalStyles.title}`}>Історія Фонду</div>
        </div>
        <div className={styles.block_news}>
          <div className={styles.news_item}>
            <Slider {...settings}>
              <div>
                <div className={styles.month_block}>
                  <div className={`${globalStyles.text14B}`}>2022</div>
                  <div className={styles.month_text}>травень</div>
                </div>
                <div className={styles.line_container}>
                  <div className={`${globalStyles.round_bg_history}`}>
                    <img src={flag_round} alt="" />
                  </div>
                  <div className={styles.line_history}></div>
                </div>
                <div className={`${globalStyles.text12Fw4} ${styles.subtitle}`}>
                  Зустріч двох українців з відставним ветераном США. Організація
                  спільної діяльності. Вдала евакуаційная місія до
                  Северодонетська - 120 цивільних евакуйовано з частково
                  окупованого міста
                </div>
              </div>

              <div>
                <div className={styles.month_block}>
                  <div className={`${globalStyles.text14B}`}>2022</div>
                  <div className={styles.month_text}>червень</div>
                </div>
                <div className={styles.line_container}>
                  <div className={`${globalStyles.round_bg_history}`}>
                    <img src={flag_round} alt="" />
                  </div>
                  <div className={styles.line_history}></div>
                </div>
                <div className={`${globalStyles.text12Fw4} ${styles.subtitle}`}>
                  Реєстрація благодійного фонду “ДЛЯ ГЕРОЇВ”. Партнерство з
                  закордонними організаціями, налагодження доставки гуманітарної
                  допомоги до фронтових і прифронтових територій
                </div>
              </div>
              <div>
                <div className={styles.month_block}>
                  <div className={`${globalStyles.text14B}`}>2022</div>
                  <div className={styles.month_text}>серпень</div>
                </div>
                <div className={styles.line_container}>
                  <div className={`${globalStyles.round_bg_history}`}>
                    <img src={flag_round} alt="" />
                  </div>
                  <div className={styles.line_history}></div>
                </div>
                <div className={`${globalStyles.text12Fw4} ${styles.subtitle}`}>
                  Створення і захист благодійного проєкту LIVE AID UKRAINE.
                  Отримано перший грант на проведення благодійного концертного
                  туру містами України на підтримку ЗСУ
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className={styles.swipe_wrapper}>
          <SwipeRightIcon />
          <div className={styles.swipeRight_title}>Гортай вліво</div>
        </div>
      </div>
    </section>
  );
};

export default HistoryFund;
