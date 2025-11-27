import { useState } from "react";
import { mainServices } from "../../data/mainServicesData";
import MainTitle from "../shared/components/MainTitle";
import MainServiceCard from "./components/MainServiceCard";
import ServiceModal from "./components/ServiceModal";

function ServicesInline() {
  const [selectedService, setSelectedService] = useState(null);

  function openService(service) {
    setSelectedService(service);
  }

  function closeService() {
    setSelectedService(null);
  }

  return (
    <section className="flex flex-col max-w-[1118px] m-auto mt-10 gap-8">
      
      <ServiceModal service={selectedService} onClose={closeService} />

      <MainTitle>Serviços</MainTitle>

      <div className="flex justify-between">
        {mainServices.map((item, index) => (
          <MainServiceCard
            key={index}
            icon={item.icon}
            serviceName={item.serviceName}
            description={item.description}
            onclick={() => openService(item)}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesInline;