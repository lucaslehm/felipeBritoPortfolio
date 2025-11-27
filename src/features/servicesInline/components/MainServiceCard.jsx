import { RiArrowRightUpLine } from "@remixicon/react";
import * as RemixIcons from "@remixicon/react";

function MainServiceCard({ icon, serviceName, description, onclick }) {
  const IconComponent = RemixIcons[icon];

  return (
    <div onClick={onclick} className="flex flex-col gap-4 ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] p-5 w-[210px] cursor-pointer transition-all hover:scale-102 hover:bg-orange-100">
      <IconComponent size={45} color="oklch(76.9% 0.188 70.08)" />
      <p className="text-[1.1em] font-semibold text-orange-950">
        {serviceName}
      </p>
      <p className="text-sm font-medium text-amber-900">{description}</p>

      <span className="self-end mt-auto">
        {" "}
        <RiArrowRightUpLine size={40} color="oklch(76.9% 0.188 70.08)" />{" "}
      </span>
    </div>
  );
}

export default MainServiceCard;
