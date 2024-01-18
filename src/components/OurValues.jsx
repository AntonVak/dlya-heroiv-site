import { Container } from "./stylesGlobal/Container";
import style from "./ourValues.module.css";
import FlagIcon from "./ui/icons/FlagIcon";
import SwipeRightIcon from "./ui/icons/SwipeRightIcon";

const OurValues = () => {
  const styles = {
    containerLg: {
      "&.MuiContainer-maxWidthLg": {
        width: "100% ",
      },
    },
  };
  return (
    <Container>
      <section className={style.section}>
        <p className={style.title}>наша сила у наших цінностях</p>
        <div className={style.values}>
          <FlagIcon />
          <p className={style.values_title}>Єднісь</p>
          <FlagIcon />
          <p className={style.values_title}>Взаємодія</p>
          <FlagIcon />
          <p className={style.values_title}>Повага</p>
          <FlagIcon />
          <p className={style.values_title}>
            Віра в перемогу <br></br>
            України
          </p>
          <FlagIcon />
          <p className={style.values_title}>
            Прозорість і<br></br>звітність
          </p>
        </div>
        <div className={style.swipe_wrapper}>
          <SwipeRightIcon />
          <div className={style.swipeRight_title}>Гортай вліво</div>
        </div>
      </section>
    </Container>
  );
};

export default OurValues;
