import style from "./ourProgress.module.css";
import TeamImg from "./common/img/comands.png";
import { Grid, Typography } from "@mui/material";
import { styles } from "./OurProgressStyle";
import NumberTextStyle from "./stylesGlobal/ProgressTextStyle";
import { Container } from "./stylesGlobal/Container";

const OurProgress = () => {
  
  return (
    <section className={style.section}>
      <Container >
        <div className={style.team}>
          <div className={style.title}>досягнення нашої команди</div>
          <img src={TeamImg} alt="" />
          <button className={style.button}>
            <p className={style.btn_text}>Хочу підтримати</p>
          </button>
        </div>
      

      <Grid container spacing={1} sx={styles.wrapper_grid}>
        <Grid item xs={2.5}>
          <NumberTextStyle>120+</NumberTextStyle>
          <Typography variant="h6" color="text.primary">
            <span style={{ fontWeight: 700 }}>тон гуманітарної допомоги</span>
            доставлено до прифронтових зон
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <NumberTextStyle>
            14 <span style={{ fontSize: "16px" }}>млн грн</span>
          </NumberTextStyle>
          <Typography variant="h6" color="text.primary">
            <span style={{ fontWeight: 700 }}>
              зібрано на потреби захисників України
            </span>
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <NumberTextStyle>25+</NumberTextStyle>
          <Typography variant="h6" color="text.primary">
            <span style={{ fontWeight: 700 }}>військових підрозділів</span>, з
            якими співпрацюємо на регулярній основі
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <NumberTextStyle>50+</NumberTextStyle>
          <Typography variant="h6" color="text.primary">
            <span style={{ fontWeight: 700 }}>дронів передані військовим</span>
            від закордонних партнерів
          </Typography>
        </Grid>
      </Grid>
      </Container>
    </section>
  );
};

export default OurProgress;
