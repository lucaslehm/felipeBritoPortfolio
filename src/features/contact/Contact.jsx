import MainTitle from "../shared/components/MainTitle";
import ContractMe from "./components/ContractMe";
import FormContactBox from "./components/FormContactBox";
import { formContact } from "./data/contactData";

function Contact() {
  return (
    <section className="flex flex-col max-w-[1118px] m-auto mt-10 gap-8">
      <MainTitle>Contato</MainTitle>

      <div className="flex justify-between">
        <FormContactBox form={formContact} />

        <ContractMe />
      </div>
    </section>
  );
}

export default Contact;
