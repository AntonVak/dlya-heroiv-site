import styles from "./ourTeam.module.css";
import Slider from "react-slick";
import globalStyles from "../../stylesGlobal/globalStyles.module.css";
import ButtonSliderLeft from "./ButtonSliderLeft";
import ButtonSliderRight from "./ButtonSliderRight";
import Foto0 from "../../common/svg/OurTeam/0.png";
import Foto1 from "../../common/svg/OurTeam/01.png";
import Foto2 from "../../common/svg/OurTeam/02 dmytryk.png";
import Foto3 from "../../common/svg/OurTeam/1.png";
import Foto4 from "../../common/svg/OurTeam/Петров 2.png";
import Foto5 from "../../common/svg/OurTeam/Кулик3.png";
import Foto6 from "../../common/svg/OurTeam/калініна 4.png";
import Foto7 from "../../common/svg/OurTeam/Дугін 5.png";
import Foto8 from "../../common/svg/OurTeam/Бучацький 6.png";
import Foto9 from "../../common/svg/OurTeam/ченченко 7.png";
import Foto10 from "../../common/svg/OurTeam/Твердоступ 8.png";
import Foto11 from "../../common/svg/OurTeam/гошовский 9.png";
import Foto12 from "../../common/svg/OurTeam/10.png";
import Foto13 from "../../common/svg/OurTeam/11.png";
import Foto14 from "../../common/svg/OurTeam/12 томілін.png";
import Foto15 from "../../common/svg/OurTeam/13 константинов.png";
import FotoFix from "../../common/svg/OurTeam/fix.png";

const OurTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <ButtonSliderLeft />,
    prevArrow: <ButtonSliderRight />,
    responsive: [
      {
        breakpoint: 1440,
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
    <section className={styles.ourTeam}>
      <div className={styles.container}>
        <div>
          <div className={`${globalStyles.title}`}>наша команда</div>
        </div>
        <div className={styles.block_foto2}>
        <Slider {...settings}></Slider>


          {/* <Slider {...settings}>
            <div>
              <div className={styles.main_foto}>
                <div className={styles.border_big}>
                  <img src={Foto0} alt="" />
                  <div
                    className={`${globalStyles.text16B} ${styles.text16B_name} `}
                  >
                    Роман
                  </div>
                  <div className={globalStyles.text12Fw4}>Засновник фонду</div>
                </div>
              </div>
            </div>
            <div style={{ width: 400 }}>
              <div className={styles.border_main}>
                <img src={Foto1} alt="" />
                <div>
                  <div
                    className={`${globalStyles.text16B} ${styles.text16B_name}  `}
                  >
                    Володимир
                  </div>
                  <div className={globalStyles.text12Fw4}>Засновник фонду</div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.border_foto}>
                <img src={Foto3} alt="" />
              </div>
            </div>
            <div style={{ width: 400 }}>
              <div className={styles.border_main2}>
                <img src={Foto2} alt="" />
                <div>
                  <div className={`${globalStyles.text16B} `}>Ернест</div>
                  <div className={globalStyles.text12Fw4}>
                    Менеджер з розвитку
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto4} alt="" />
              </div>
              <div className={styles.border_foto}>
                <img src={Foto8} alt="" />
              </div>
              <div className={styles.border_foto}>
                <img src={Foto8} alt="" />
              </div>
              <div className={styles.border_foto}>
                <img src={Foto8} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto5} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto6} alt="" />
              </div>
            </div>
            <div>
              <div
                className={styles.border_foto}
                style={{
                  backgroundImage: `url('../common/svg/OurTeam/fix.png')`,
                }}
              >
                <img src={FotoFix} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto7} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto8} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto9} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto10} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto11} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto12} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto13} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto14} alt="" />
              </div>
            </div>
            <div>
              <div className={styles.border_foto}>
                <img src={Foto15} alt="" />
              </div>
            </div>
            <div></div>
            <div></div>
          </Slider> */}
        </div>
        {/* <div className={styles.block_foto}>
          

          <div className={styles.team_foto}>
            <div className={styles.top_foto}>
              
              
              
              
              
            
            
              
              
              
              
              
              
              
              
              
              
            
            </div>
          </div>
        </div> */}
        <div className={styles.block_foto}>
          <div className={styles.main_foto}>
            <div className={styles.border_big}>
              <img src={Foto0} alt="" />
              <div
                className={`${globalStyles.text16B} ${styles.text16B_name} `}
              >
                Роман
              </div>
              <div className={globalStyles.text12Fw4}>Засновник фонду</div>
            </div>
          </div>

          <div className={styles.border_main}>
            <img src={Foto1} alt="" />
            <div>
              <div
                className={`${globalStyles.text16B} ${styles.text16B_name}  `}
              >
                Володимир
              </div>
              <div className={globalStyles.text12Fw4}>Засновник фонду</div>
            </div>
          </div>
          <div className={styles.border_main2}>
            <img src={Foto2} alt="" />
            <div>
              <div className={`${globalStyles.text16B} `}>Ернест</div>
              <div className={globalStyles.text12Fw4}>Менеджер з розвитку</div>
            </div>
          </div>
          <div className={styles.border_foto}>
            <img src={Foto3} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto4} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto5} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto6} alt="" />
          </div>

          <div
            className={styles.border_foto}
            style={{
              backgroundImage: `url('../common/svg/OurTeam/fix.png')`,
            }}
          >
            <img src={FotoFix} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto7} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto8} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto9} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto10} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto11} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto12} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto13} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto14} alt="" />
          </div>
          <div className={styles.border_foto}>
            <img src={Foto15} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
