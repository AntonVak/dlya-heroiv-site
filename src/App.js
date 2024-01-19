// import NavMenu from "./components/NavMenu";
import ForWhat from "./components/AboutUs/ForWhat";
import AfterVictory from "./components/AfterVictory/AfterVictory";
import OurActivities from "./components/OurActivities";
import OurPartners from "./components/OurPartners/OurPartners";
import OurProgress from "./components/OurProgress";
import OurValues from "./components/OurValues";
import PayInfo from "./components/PayInfo/PayInfo";
import SlickSlider from "./components/SlickSlider";

function App() {
  return (
    <div className="App">
      {/* <SlickSlider /> */}
      <OurActivities />
      <OurValues />
      <OurProgress />
      <OurPartners/>
      <AfterVictory/>
      <PayInfo/>
      <ForWhat/>
    </div>
  );
}

export default App;
