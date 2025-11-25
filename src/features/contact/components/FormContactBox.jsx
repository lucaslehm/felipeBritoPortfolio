import { useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";
import FormSuccess from "./FormSuccess";

export default function FormContactBox({ form }) {
  const [formData, setFormData] = useState(
    Object.fromEntries(Object.values(form.formFields).map((f) => [f.id, ""]))
  );

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(id, value) {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function maskPhone(value) {
    return value
      .replace(/\D/g, "") // remove tudo que não é número
      .replace(/^(\d{2})(\d)/, "($1) $2") // (DD)
      .replace(/(\d{5})(\d)/, "$1-$2") // 99999-9999
      .replace(/(-\d{4})\d+$/, "$1"); // limita ao tamanho correto
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch(
        "https://discord.com/api/webhooks/1442951817808838839/NCGgwwWIAiyvQsKBdbd3r9MINDiMvjniK3hwMDuyRm4frU4Jpm_XGejcEV2vYMP7Ctqf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: "<@450798453761507358> 📩 *Novo formulário recebido!*",
            embeds: [
              {
                title: "📨 Nova Mensagem de Formulário",
                color: 15844367,
                description:
                  "Você recebeu uma nova submissão do site. Confira os dados abaixo:",
                fields: [
                  {
                    name: "📋 Dados Enviados",
                    value:
                      "```json\n" + JSON.stringify(formData, null, 2) + "\n```",
                  },
                ],
                footer: {
                  text: "Formulário • Website",
                },
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        }
      );

      setIsSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar para o webhook:", error);
      alert("Erro ao enviar dados. Tente novamente.");
    }

    setIsLoading(false);
  }

  if (isSuccess) {
    return <FormSuccess onClose={() => setIsSuccess(false)} />;
  }

  return (
    <div className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[529px]">
      {/* Header */}
      <div className="flex items-center justify-between p-2 ring-3 ring-[#461901] bg-orange-200">
        <span className="text-orange-600 font-semibold">{form.title}</span>
        <RiArrowDownSLine className="text-orange-600" />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-4 p-5">
        <p className="text-orange-950 font-medium">{form.description}</p>

        {/* Formulário */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {Object.values(form.formFields).map((field) => (
            <div key={field.id} className="flex flex-col">
              <label
                htmlFor={field.id}
                className="text-orange-900 font-semibold mb-1"
              >
                {field.label}
              </label>

              {/* Tipos de input */}
              {field.type === "select" ? (
                <select
                  id={field.id}
                  required={field.required}
                  className="
                    ring-2 ring-orange-800 
                    p-2 
                    bg-white 
                    rounded-none
                    focus:outline-none
                  "
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="
                    ring-2 ring-orange-800 
                    p-2 
                    bg-white 
                    min-h-[120px] 
                    rounded-none
                    focus:outline-none
                  "
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              ) : field.id === "phone" ? (
                <input
                  id={field.id}
                  type="text"
                  placeholder={field.placeholder}
                  required={field.required}
                  className="
                    ring-2 ring-orange-800 
                    p-2 
                    bg-white 
                    rounded-none
                    focus:outline-none
                  "
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, maskPhone(e.target.value))}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="
                    ring-2 ring-orange-800 
                    p-2 
                    bg-white 
                    rounded-none
                    focus:outline-none
                  "
                  value={formData[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              )}
            </div>
          ))}

          {/* Botão */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              flex gap-3 w-fit mt-2 self-end 
              ring-3 ring-[#461901] 
              shadow-[5px_5px_0px_#461901] 
              bg-orange-500 p-2 
              text-white font-semibold 
              cursor-pointer 
              transition-all hover:scale-102 hover:bg-orange-400
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {isLoading ? "Enviando..." : "Enviar"}
            {!isLoading && <RiArrowRightSLine className="text-white" />}
          </button>
        </form>
      </div>
    </div>
  );
}
