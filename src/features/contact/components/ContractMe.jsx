import { RiArrowDownSLine, RiWhatsappLine } from "@remixicon/react";
import { contractMe } from "../data/contactData";

function ContractMe() {
  return (
    <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[529px] h-fit">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">
          {contractMe.title}
        </span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-orange-600"
          />
        </div>
      </div>

      <div className="p-7 flex flex-col gap-5">
        <p className="font-medium text-orange-950">{contractMe.text}</p>

        <button className="flex bg-green-500 w-90 h-13 items-center justify-between px-4 ring-3 ring-[#01460d] shadow-[5px_5px_0px_#01460d] text-white font-semibold text-[1.1em] cursor-pointer transition-all hover:scale-101 hover:bg-green-600">
          <span>{contractMe.buttonText}</span>
          <RiWhatsappLine size={30} />
        </button>
      </div>
    </div>
  );
}

export default ContractMe;
