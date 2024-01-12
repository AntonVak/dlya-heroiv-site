import { Box, Typography } from "@mui/material";
import { Cicle, Img, styles } from "./ButtonArrowStyle";
import ArrowIcon from '../common/svg/arrow.svg';

const ButtonArrow = ({ text, width }) => {
  return (
    <Box sx={{ ...styles.button, width }}>
      <Typography>{text}</Typography>
      <Cicle>
        <Img src={ArrowIcon} alt={ArrowIcon} />
      </Cicle>
    </Box>
  );
};

export default ButtonArrow;
