// import NavMenu from "./components/NavMenu";
import ForWhat from "./components/AboutUs page/ForWhat";
import OurTeam from "./components/AboutUs page/OurTeam/OurTeam";
import AfterVictory from "./components/AfterVictory/AfterVictory";
import HistoryFund from "./components/AboutUs page/HistoryFund/HistoryFund";
import OurActivities from "./components/OurActivities";
import OurPartners from "./components/OurPartners/OurPartners";
import OurProgress from "./components/OurProgress";
import OurValues from "./components/OurValues";
import PayInfo from "./components/PayInfo/PayInfo";
import TalkAboutUs from "./components/AboutUs page/TalkAboutUs";
import Certificates from "./components/AboutUs page/Сertificates";
import AboutFund from "./components/ToBePartnerPage/AboutFund";
import PartnersShip from "./components/ToBePartnerPage/Partnership";
import ThankesPartners from "./components/ToBePartnerPage/ThankesPartners";
import OurProgectsPage from "./components/Page Projects/OurProgectsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <OurActivities />
      <OurValues />
      <OurProgress />
      <OurPartners />
      <AfterVictory />
      <PayInfo />
      <ForWhat />
      <OurTeam />
      <HistoryFund />
      <TalkAboutUs />
      <Certificates />
      <AboutFund />
      <PartnersShip />
      <ThankesPartners />
      <OurProgectsPage />
    </div>
  );
}

export default App;
