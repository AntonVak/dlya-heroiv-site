import { Container } from "@mui/material";
import style from "./ourValues.module.css";
import FlagIcon from "./ui/icons/FlagIcon";

const OurValues = () => {
  const styles = {
    containerLg: {
      "&.MuiContainer-maxWidthLg": {
        width: "100% ",
      },
    },
  };
  return (
    <section className={style.section}>
      <Container sx={{ ...styles.containerLg }}></Container>
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
    </section>
  );
};

export default OurValues;
