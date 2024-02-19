import Slider2 from "./slider2";
import Spacer from "./spacer";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

const Slider = () => {

  return (
    <>
      <div className="hero_area">
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide"  data-ride="carousel">
            <div className="carousel-inner">
              <Slider2/>
            </div>
          </div>
        </section>
      </div>
      <Spacer height={50}/>
      <About/>
      <Spacer height={50}/>
      <Portfolio/>
      <Spacer height={50}/>
      <Contact/>
      <Spacer/>
    </>
  );
};

export default Slider;