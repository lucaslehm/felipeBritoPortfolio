import { RiArrowDownSLine } from "@remixicon/react";

function ProfResume({ resumeParagraphs }) {
  return (
    <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[338px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">Por quê eu?</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-orange-600"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        {resumeParagraphs.map((p, i) => {
          return (
            <p className="text-orange-950" key={i}>
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ProfResume;
