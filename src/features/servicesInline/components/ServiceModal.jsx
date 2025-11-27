import { RiCloseLine } from "@remixicon/react";
import * as RemixIcons from "@remixicon/react";

function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const IconComponent = RemixIcons[service.icon];

  return (
    <dialog
      open
      className="outline-none w-200 h-150 m-auto flex flex-col gap-4 ring-3 ring-[#461901] shadow-[7px_7px_0px_#461901] bg-yellow-50 transition-all z-50"
    >
      <div className="ring-3 ring-[#461901] p-2 bg-orange-400 flex justify-between">
        <span className="font-bold text-orange-950">{service.serviceName}</span>

        <span onClick={onClose} className="cursor-pointer">
          <RiCloseLine size={24} color="#441306" />
        </span>
      </div>

      <div className="flex justify-between items-center h-full p-14">
        <div>
          <IconComponent size={200} color={"oklch(75% 0.183 55.934)"} />
        </div>
        <div className="p-4 flex flex-col gap-10">
          <p className=" text-orange-950 font-medium w-100">
            {service.descriptionDetailed}
          </p>
          <button onClick={onClose} className="bg-orange-400 ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-fit px-20 py-2 cursor-pointer font-semibold text-orange-950 transition-all hover:bg-orange-500 hover:scale-102">
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default ServiceModal;
