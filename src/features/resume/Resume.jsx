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
  profissionalResume,
} from "../../data/resumeData";
import ResumeLists from "./components/ResumeLists";
import ProfResume from "./components/ProfResume";
import LanguageCard from "./components/LanguageCard";

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

          <ResumeLists itens={contextualHardSkills} />
        </div>

        {/* Coluna 3 */}
        <div className="flex flex-col gap-4">
          <MainSubTitle>SoftSkills</MainSubTitle>

          <ResumeLists itens={softSkills} />

          <MainSubTitle>Resumo Profissional</MainSubTitle>

          <ProfResume resumeParagraphs={profissionalResume} />

          <MainSubTitle>Idiomas</MainSubTitle>

          {languages.map((item, index) => (
            <LanguageCard
              key={index}
              languageName={item.language}
              level={item.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
