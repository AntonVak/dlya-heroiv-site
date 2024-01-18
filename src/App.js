// import NavMenu from "./components/NavMenu";
import OurActivities from "./components/OurActivities";
import OurPartners from "./components/OurPartners/OurPartners";
import OurProgress from "./components/OurProgress";
import OurValues from "./components/OurValues";
import SlickSlider from "./components/SlickSlider";

function App() {
  return (
    <div className="App">
      {/* <SlickSlider /> */}
      <OurActivities />
      <OurValues />
      <OurProgress />
      <OurPartners/>
    </div>
  );
}

export default App;
