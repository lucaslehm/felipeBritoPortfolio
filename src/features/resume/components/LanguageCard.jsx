import { RiArrowDownSLine } from "@remixicon/react";

function LanguageCard({ languageName, level }) {
  return (
    <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[338px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">{languageName}</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-orange-600"
          />
        </div>
      </div>

      <div className="p-4 flex items-center justify-between gap-2">
        <div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`
                    w-14 h-3 rounded-sm
                    ${i <= level ? "bg-orange-500" : "bg-orange-200"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageCard;
