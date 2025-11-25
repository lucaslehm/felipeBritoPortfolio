import { RiArrowRightUpLine } from "@remixicon/react";

function MainProjectCard({coverUrl, projectName, description}) {

    const bgImage = `bg-[url(${coverUrl})]`

    // "bg-amber-500 w-full h-40 bg-[url('https://i.ibb.co/1YN7yDbn/foto-leao-header.jpg')] bg-cover bg-no-repeat bg-center"

  return (
    <div className="flex flex-col gap-4 ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] p-5 w-[338px] cursor-pointer transition-all hover:scale-102 hover:bg-orange-100">
      <div className={`bg-amber-500 w-full h-40 bg-cover bg-no-repeat bg-center ${bgImage}`}>

      </div>
      <p className="text-[1.1em] font-semibold text-orange-950">{projectName}</p>
      <p className="text-sm font-medium text-amber-900">{description}</p>

        <span className="self-end"> <RiArrowRightUpLine size={40} color="oklch(76.9% 0.188 70.08)"/> </span>

    </div>
  );
}

export default MainProjectCard;
