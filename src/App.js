// import NavMenu from "./components/NavMenu";
import ForWhat from "./components/AboutUs/ForWhat";
import OurTeam from "./components/AboutUs/OurTeam";
import AfterVictory from "./components/AfterVictory/AfterVictory";
import HistoryFund from "./components/HistoryFund/HistoryFund";
import OurActivities from "./components/OurActivities";
import OurPartners from "./components/OurPartners/OurPartners";
import OurProgress from "./components/OurProgress";
import OurValues from "./components/OurValues";
import PayInfo from "./components/PayInfo/PayInfo";
import SlickSlider from "./components/SlickSlider";
import TalkAboutUs from "./components/TalkAboutUs/TalkAboutUs";

function App() {
  return (
    <div className="App">
      {/* <SlickSlider /> */}
      <OurActivities />
      <OurValues />
      <OurProgress />
      <OurPartners />
      <AfterVictory />
      <PayInfo />
      <ForWhat />
      <OurTeam />
      <HistoryFund />
      <TalkAboutUs/>
    </div>
  );
}

export default App;
