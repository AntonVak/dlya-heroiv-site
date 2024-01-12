import { Button, Cicle, ImgMap, styles } from "./ButtonYellowStyle";
import mapImage from "../common/svg/prapor 2.png";
import { Typography } from "@mui/material";

const ButtonYellow = ({ text }) => {
  return (
    <Button>
      <Cicle>
        <ImgMap src={mapImage} alt={mapImage} />
      </Cicle>
      <Typography sx={styles.text}>{text}</Typography>
    </Button>
  );
};

export default ButtonYellow;
