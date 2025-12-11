import { RiBehanceFill } from "@remixicon/react";
import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Introduction from "../introduction/Introduction";
import Resume from "../resume/Resume";
import ServicesInline from "../servicesInline/ServicesInline";

function Portfolio() {
  return (
    <div id="top" className="bg-amber-50">
      <Introduction id="introduction" />
      <ServicesInline id="services" />

      <a href="https://www.behance.net/felipebrito39" target="_blank" className="flex gap-6 items-center justify-center bg-amber-500 py-5 mt-15">
        {" "}
        <RiBehanceFill size={35} /> <span className="text-3xl font-bold">PORTFOLIO</span> <RiBehanceFill size={35} />
      </a>

      <Resume id="resume" />
      <Contact id="contact" />
      <AboutMe id="about" />
      <Footer />
    </div>
  );
}

export default Portfolio;
