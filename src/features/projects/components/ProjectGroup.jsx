import MainTitle from "../../shared/components/MainTitle";
import ProjectCard from "./ProjectCard";

export default function ProjectGroup({ projectGroup }) {
  return (
    <section className="flex flex-col gap-8 mt-10">
      <MainTitle>{projectGroup.groupTitle}</MainTitle>

      <div className="flex flex-col gap-12">
        {projectGroup.groupProjects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
