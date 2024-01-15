
import ButtonYellow from "./ui/ButtonYellow";
import { Typography, Box } from "@mui/material";
import { Section, Span, Cicle, Img, styles } from "./OurActivitiesStyle";

import ArrowIcon from "./common/svg/arrow.svg";

const OurActivities = () => {
  return (
    <Section>
      <Box sx={{ width: "400px" }}>
        <Typography sx={styles.subtitle}>Напрями</Typography>
        <Typography variant="h2" sx={styles.title}>
          наша <Span>дія</Span>льність
        </Typography>
        <ButtonYellow text="Хочу підтримати" />
      </Box>
      <Box sx={{ mt: 0.5 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ ...styles.button, width: "310px" }}>
            <Typography>Допомога військовим</Typography>
            <Cicle>
              <Img src={ArrowIcon} alt={ArrowIcon} />
            </Cicle>
          </Box>

          <Box sx={{ ...styles.button, width: "420px", marginLeft: "20px" }}>
            <Typography>Допомога медичним закладам</Typography>
            <Cicle>
              <Img src={ArrowIcon} alt={ArrowIcon} />
            </Cicle>
          </Box>
        </Box>
        <Box sx={{ ...styles.button, width: "640px", m: '10px 0 0 auto' }}>
          <Typography>Допомога постраждалому населенню</Typography>
          <Cicle>
            <Img src={ArrowIcon} alt={ArrowIcon} />
          </Cicle>
        </Box>
        <Box sx={{ ...styles.button, width: "530px", m:'10px 0 0 auto'}}>
          <Typography>
            Інтеграція закордонних зацікавлених партнерів/донорів
          </Typography>
          <Cicle>
            <Img src={ArrowIcon} alt={ArrowIcon} />
          </Cicle>
        </Box>
      </Box>
    </Section>
  );
};

export default OurActivities;
