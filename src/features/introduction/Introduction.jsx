import MainSubTitle from "../shared/components/MainSubTitle";
import MainTitle from "../shared/components/MainTitle";
import IntroBtn from "./components/introBtn";
import IntroTextBox from "./components/IntroTextBox";
import {
  introTitle,
  introTextContent,
  socialBtnContent,
} from "../../data/introData";

function Introduction() {
  return (
    <div>
      {/* Sessão container */}
      <div className="flex max-w-[1118px] m-auto mt-10 justify-between">
        {/* Sessão das info foto */}
        <div className="flex flex-col gap-5">
          <MainTitle>Olá! Me chamo Felipe!</MainTitle>
          <IntroTextBox title={introTitle} text={introTextContent} />
          <div>
            <MainSubTitle>Dá um liga:</MainSubTitle>
            <div className="mt-5 flex justify-between">
              {socialBtnContent.map((item, index) => (
                <IntroBtn
                  key={index}
                  icon={item.icon}
                  btnText={item.text}
                  bgColor={item.bgColor}
                  iconColor={item.iconColor}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Sessão da foto */}
        <div>
          <div className="ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-124 h-full bg-[url('https://i.ibb.co/1YN7yDbn/foto-leao-header.jpg')] bg-cover bg-no-repeat bg-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
