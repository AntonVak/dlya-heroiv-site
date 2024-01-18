import style from "./ourProgress.module.css";
import TeamImg from "./common/img/comands.png";
import { Grid, Typography } from "@mui/material";
import { styles } from "./OurProgressStyle";
import NumberTextStyle from "./stylesGlobal/ProgressTextStyle";
import { Container } from "./stylesGlobal/Container";

const OurProgress = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.team}>
          <div className={style.title}>досягнення нашої команди</div>
          {/* <img src={TeamImg} alt="" />
          <button className={style.button}>
            <p className={style.btn_text}>Хочу підтримати</p>
          </button> */}
        </div>

        <div className={style.stats_wraper}>
          <div className={style.stats_card}>
            <div className={style.stats_title}>120+</div>
            <div className={style.stats_subtitle}>
              <span className={style.stats_span}>
                тон гуманітарної допомоги
              </span>{" "}
              доставлено до прифронтових зон
            </div>
          </div>

          <div>
            <div className={style.stats_title}>
              14<span>млн грн</span>
            </div>
            <div className={style.stats_subtitle}>
              <span className={style.stats_span}>
                зібрано на потреби захисників України
              </span>
            </div>
          </div>

          <div>
            <div className={style.stats_title}>25+</div>
            <div className={style.stats_subtitle}>
              <span className={style.stats_span}>військових підрозділів </span>з
              якими співпрацюємо на регулярній основі
            </div>
          </div>

          <div>
            <div className={style.stats_title}>50+</div>
            <div className={style.stats_subtitle}>
              <span className={style.stats_span}>
                дронів передані військовим
              </span>{" "}
              від закордонних партнерів
            </div>
          </div>
        </div>
        <div className={style.team_footer}>
          <img src={TeamImg} alt="" />
          <button className={style.button}>
            <p className={style.btn_text}>Хочу підтримати</p>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default OurProgress;
