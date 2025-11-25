import MainTitle from "../shared/components/MainTitle";
import AboutMeCard from "./components/AboutMeCard";
import TimeLineCard from "./components/TimeLineCard";
import { timeLine } from "./data/aboutMeData";
import { peopleCard } from "./data/aboutMeData";

function AboutMe() {
  return (
    <section className="flex flex-col max-w-[1118px] m-auto mt-10 gap-8">
      <MainTitle>Sobre mim</MainTitle>

      <div className="flex justify-between">
        <AboutMeCard data={peopleCard} />

        <div className="flex flex-col gap-3">
            {timeLine.map((item,index) => (
                <TimeLineCard 
                key={index}
                year={item.year}
                text={item.text}
                />
            ))}
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
