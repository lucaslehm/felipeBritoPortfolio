import MainTitle from "../shared/components/MainTitle";
import MainSubTitle from "../shared/components/MainSubTitle";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import HardSkill from "./components/HardSkill";
import {
  experiences,
  education,
  hardSkills,
  contextualHardSkills,
  softSkills,
  languages,
} from "../../data/resumeData";

function Resume() {
  return (
    <div className="flex flex-col max-w-[1118px] m-auto mt-10 gap-2">
      <MainTitle>Resumo</MainTitle>

      {/* Organizador */}
      <div className="flex justify-between">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-4">
          <MainSubTitle>Experiências</MainSubTitle>

          <div className="flex flex-col gap-5">
            {experiences.map((item, index) => (
              <ExperienceCard
                key={index}
                company={item.company}
                role={item.role}
                duration={item.duration}
                description={item.description}
              />
            ))}
          </div>

          <MainSubTitle>Educação</MainSubTitle>

          <div className="flex flex-col gap-5">
            {education.map((item, index) => (
              <EducationCard
                key={index}
                institute={item.institute}
                courseName={item.courseName}
                situation={item.situation}
              />
            ))}
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col gap-4">
          <MainSubTitle>HardSkills</MainSubTitle>

          <div className="flex flex-col gap-4">
            {hardSkills.map((item, index) => (
              <HardSkill
                key={index}
                skillName={item.skillName}
                level={item.level}
                iconUrl={item.iconURL}
              />
            ))}
          </div>

          <MainSubTitle>HardSkills Complementares</MainSubTitle>
        </div>

        {/* Coluna 3 */}
        <div></div>
      </div>
    </div>
  );
}

export default Resume;
