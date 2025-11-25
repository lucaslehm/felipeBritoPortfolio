import { mainServices } from "../../data/mainServicesData";
import MainTitle from "../shared/components/MainTitle";
import { RiArrowRightLine } from "@remixicon/react";
import MainServiceCard from "./components/MainServiceCard";


function ServicesInline() {
  return (
    <section className="flex flex-col max-w-[1118px] m-auto mt-10 gap-8">
      <MainTitle>Serviços</MainTitle>

      <div className="flex justify-between">

        {mainServices.map((item, index) => (
            <MainServiceCard 
            key={index}
            icon={item.icon}
            serviceName={item.serviceName}
            description={item.description}
            />
        ))}

      </div>


      <a className="flex self-end font-bold text-sm items-center gap-1 text-orange-950 transition-all hover:text-orange-800" href="#"><span>Ver todos</span> <RiArrowRightLine size={20} /></a>
    </section>
  );
}

export default ServicesInline;
