import { RiCheckboxCircleFill } from "@remixicon/react";

export default function FormSuccess({ onClose }) {
  return (
    <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[529px] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">Sucesso!</span>
        <RiCheckboxCircleFill className="text-orange-600" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 p-6 text-center">
        <RiCheckboxCircleFill size={80} className="text-green-600" />

        <h2 className="text-orange-900 font-bold text-xl">
          Formulário enviado com sucesso!
        </h2>

        <p className="text-orange-950">
          Muito obrigado! Recebemos suas informações e entraremos em contato.
        </p>

        <button
          onClick={onClose}
          className="
            flex gap-3 mt-4 
            ring-3 ring-[#461901] 
            shadow-[5px_5px_0px_#461901] 
            bg-orange-500 p-2 
            text-white font-semibold 
            cursor-pointer 
            transition-all hover:scale-102 hover:bg-orange-400
          "
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
