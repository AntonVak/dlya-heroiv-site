import ButtonYellow from "./ui/ButtonYellow";
import { Typography, Box } from "@mui/material";
import { Section, Span, Cicle, Img, styles } from "./OurActivitiesStyle";

import ArrowIcon from "./common/svg/arrow.svg";
import { Container } from "./stylesGlobal/Container";

const OurActivities = () => {
  return (
    <Container>
      <Section>
        <Box sx={{ width: {xs: '335px', sm: "500px" } , mr: 2,}}>
          <Typography sx={styles.subtitle}>Напрями</Typography>
          <Typography variant="h2" sx={styles.title}>
            наша <br /> <Span>дія</Span>льність
          </Typography>
          {/* <ButtonYellow text="Хочу підтримати" /> */}
        </Box>
        
        <Box sx={{ mt: {xs: '22px', md: 0.5}}}>
          <Box sx={{ display: {xs: 'block', lg: "flex" }  }}>
            <Box sx={{ ...styles.button, ...styles.button1 }}>
              <Typography>Допомога військовим</Typography>
              <Cicle>
                <Img src={ArrowIcon} alt={ArrowIcon} />
              </Cicle>
            </Box>

            <Box sx={{ ...styles.button, ...styles.button2 }}>
              <Typography>Допомога медичним закладам</Typography>
              <Cicle>
                <Img src={ArrowIcon} alt={ArrowIcon} />
              </Cicle>
            </Box>
          </Box>
          <Box sx={{ ...styles.button, ...styles.button3 }}>
            <Typography>Допомога постраждалому населенню</Typography>
            <Cicle>
              <Img src={ArrowIcon} alt={ArrowIcon} />
            </Cicle>
          </Box>
          <Box sx={{ ...styles.button, ...styles.button4 }}>
            <Typography>
              Інтеграція закордонних зацікавлених партнерів/донорів
            </Typography>
            <Cicle>
              <Img src={ArrowIcon} alt={ArrowIcon} />
            </Cicle>
          </Box>
        </Box>
        
      </Section>
      <ButtonYellow text="Хочу підтримати" />
    </Container>
  );
};

export default OurActivities;
