import { Typography } from "@mui/material";
//Тестирование
const NumberTextStyle = ({ children }) => {
  const styles = {
    textNumber: {
      color: "text.yellow",
      fontWeight: 300,
      textAlign: 'left',
    },
  };
  return (
    <Typography component="h3" variant="h2" sx={styles.textNumber}>
      {children}
    </Typography>
  );
};

export default NumberTextStyle;
