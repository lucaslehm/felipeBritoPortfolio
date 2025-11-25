import { RiArrowDownSLine } from "@remixicon/react";

function TimeLineCard({year, text}) {
  return (
    <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[738px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-bold">{year}</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-orange-600"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-orange-950 font-medium">{text}</p>
      </div>
    </div>
  );
}

export default TimeLineCard;
