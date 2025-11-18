import Introduction from "../introduction/Introduction";
import ProjectsInline from "../projectsInline/ProjectsInline";
import Resume from "../resume/Resume";
import Header from "../shared/components/Header";

function Portfolio() {
  return (
    <div className="bg-amber-50">
      <Header />

      <Introduction />

      <ProjectsInline />

      <Resume />
    </div>
  );
}

export default Portfolio;
