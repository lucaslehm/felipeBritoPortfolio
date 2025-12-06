import projects from "../../data/projectsData";
import ProjectGroup from "../projects/components/ProjectGroup";
import Header from "../shared/components/Header"
import Footer from "../footer/Footer"

export default function Projetos() {
  return (
    <main className="flex flex-col gap-20">

      <Header />

      <div className="max-w-[1118px] w-full mx-auto px-4">
        <h1 className="text-4xl font-bold text-orange-700 mb-6">Projetos</h1>

        {projects.map((group, i) => (
          <ProjectGroup key={i} projectGroup={group} />
        ))}
      </div>

      <Footer />
    </main>
  );
}