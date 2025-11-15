import { RiArrowDownSLine } from "@remixicon/react";

RiArrowDownSLine;

function EducationCard({ institute, courseName, situation }) {
  const instituteSituationStyle = "text-[.8em] font-semibold text-sky-700";

  return (
    <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[338px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-sky-200">
        <span className="text-sky-600 font-semibold">Educação</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-sky-600"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col">
          <span className={instituteSituationStyle}>{institute}</span>
          <span className="text-sky-950 font-bold">{courseName}</span>
          <span className={instituteSituationStyle}>{situation}</span>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
