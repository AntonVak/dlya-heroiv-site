// import NavMenu from "./components/NavMenu";
import ForWhat from "./components/AboutUs page/ForWhat";
import OurTeam from "./components/AboutUs page/OurTeam";
import AfterVictory from "./components/AfterVictory/AfterVictory";
import HistoryFund from "./components/AboutUs page/HistoryFund";
import OurActivities from "./components/OurActivities";
import OurPartners from "./components/OurPartners/OurPartners";
import OurProgress from "./components/OurProgress";
import OurValues from "./components/OurValues";
import PayInfo from "./components/PayInfo/PayInfo";
import SlickSlider from "./components/SlickSlider";
import TalkAboutUs from "./components/AboutUs page/TalkAboutUs";
import Certificates from "./components/AboutUs page/Сertificates";
import AboutFund from "./components/ToBePartnerPage/AboutFund";
import PartnersShip from "./components/ToBePartnerPage/Partnership";
import ThankesPartners from "./components/ToBePartnerPage/ThankesPartners";
import OurProgectsPage from "./components/Page Projects/OurProgectsPage";

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
      <Certificates/>
      <AboutFund/>
      <PartnersShip/>
      <ThankesPartners/>
      <OurProgectsPage/>
    </div>
  );
}

export default App;
