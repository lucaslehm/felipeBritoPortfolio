import {
  RiCake2Fill,
  RiCarFill,
  RiMapPin2Fill,
} from "@remixicon/react";

export default function AboutMeCard({ data }) {
  const { myInfo, otherInfos, hobbies, dream } = data;

  return (
    <div className="w-[340px] bg-orange-50 ring-3 ring-[#461901] shadow-[6px_6px_0px_#461901] flex flex-col gap-6 p-6 h-fit">

      {/* FOTO + HEADER */}
      <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901]">
        <img
          src={myInfo.coverProfileURL}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* BLOCO: Nome + Role */}
      <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901]">
        <div className="bg-orange-200 ring-3 ring-[#461901] px-4 py-2">
          <span className="text-orange-700 font-bold">Quem sou eu</span>
        </div>

        <div className="p-4 flex flex-col">
          <h2 className="text-xl font-bold text-orange-900">{myInfo.fullName}</h2>
          <p className="font-semibold text-orange-700">{myInfo.role}</p>
        </div>
      </div>

      {/* BLOCO: Informações Complementares */}
      <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901]">
        <div className="bg-orange-200 ring-3 ring-[#461901] px-4 py-2">
          <span className="text-orange-700 font-bold">{otherInfos.title}</span>
        </div>

        <div className="flex flex-col gap-4 p-4 text-orange-900 font-medium">

          <div className="flex gap-3 items-center">
            <RiCake2Fill className="text-orange-700 text-xl" />
            <span>{otherInfos.infos.birthDate}</span>
          </div>

          <div className="flex gap-3 items-center">
            <RiCarFill className="text-orange-700 text-xl" />
            <span>CNH {otherInfos.infos.brazilianCNH}</span>
          </div>

          <div className="flex gap-3 items-center">
            <RiMapPin2Fill className="text-orange-700 text-xl" />
            <span>{otherInfos.infos.localization}</span>
          </div>
        </div>
      </div>

      {/* BLOCO: HOBBIES */}
      <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901]">
        <div className="bg-orange-200 ring-3 ring-[#461901] px-4 py-2">
          <span className="text-orange-700 font-bold">{hobbies.title}</span>
        </div>

        <div className="p-4">
          <ul className="list-disc ml-6 text-orange-900 font-medium">
            {hobbies.hobbies.map((hb, i) => (
              <li key={i}>{hb}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* BLOCO: SONHO */}
      <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901]">
        <div className="bg-orange-200 ring-3 ring-[#461901] px-4 py-2">
          <span className="text-orange-700 font-bold">{dream.title}</span>
        </div>

        <div className="p-4 text-orange-900 font-medium leading-relaxed">
          {dream.text}
        </div>
      </div>
    </div>
  );
}
