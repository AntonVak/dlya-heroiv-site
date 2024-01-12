import ButtonArrow from "./ui/ButtonArrow";
import ButtonYellow from "./ui/ButtonYellow";
import { Typography, Box } from "@mui/material";
import { Section, Span, styles } from "./OurActivitiesStyle";

const OurActivities = () => {
  return (
    <Section>
      <Box sx={{ width: "400px", ml: 5 }}>
        <Typography sx={styles.subtitle}>Напрями</Typography>
        <Typography variant="h2" sx={styles.title}>
          наша <Span>дія</Span>льність
        </Typography>
        <ButtonYellow text="Хочу підтримати" />
      </Box>
      <Box sx={{  mr: 5, mt: 0.5, flexGrow: 0, justifyContent: 'end'}}>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: 'end' }}>
          <ButtonArrow text="Допомога військовим" width="310px" />
          <ButtonArrow text="Допомога медичним закладам" width="420px"/>
        </Box>
        <ButtonArrow text="" width="640px"/>
        <ButtonArrow text="Інтеграція закордонних зацікавлених партнерів/донорів" width="530px"/>
      </Box>
    </Section>
  );
};

export default OurActivities;
