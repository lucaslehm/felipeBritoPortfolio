function ResumeLists({ itens }) {
  return (
    <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[338px]">
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-sky-200">
        <span className="text-sky-600 font-semibold">Experiência</span>
        <div className="flex items-center">
          <RiArrowDownSLine
            className="
            text-sky-600"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col">
          <span className={companyDurationStyle}>{company}</span>
          <span className="text-sky-950 font-bold">{role}</span>
          <span className={companyDurationStyle}>{duration}</span>
        </div>
        <p className="text-[.9em] text-orange-950 font-medium">{description}</p>
      </div>
    </div>
  );
}

export default ResumeLists;
