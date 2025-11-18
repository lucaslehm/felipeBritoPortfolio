import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";

function IntroTextBox({ title, text }) {
  return (
    <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[580px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">{title}</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-orange-600"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        {text.map((p, i) => (
          <p className="text-orange-950 font-medium" key={i}>{p}</p>
        ))}
      </div>
      <button className="flex gap-3 w-fit m-4 self-end ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] bg-orange-500 p-2 text-white font-semibold cursor-pointer transition-all hover:scale-102 hover:bg-orange-400">
        <a href="#" download={true}>
          Currículo
        </a>
        <RiArrowRightSLine
          className="
            text-white"
        />
      </button>
    </div>
  );
}

export default IntroTextBox;
