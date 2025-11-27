import AboutMe from "../aboutMe/AboutMe";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Introduction from "../introduction/Introduction";
import ProjectsInline from "../projectsInline/ProjectsInline";
import Resume from "../resume/Resume";
import ServicesInline from "../servicesInline/ServicesInline";
import Header from "../shared/components/Header";

function Portfolio() {
  return (
    <div className="bg-amber-50">
      <Header />

      <Introduction />

      <ProjectsInline />

      <ServicesInline />

      <Resume />

      <Contact />

      <AboutMe />

      <Footer />
    </div>
  );
}

export default Portfolio;
