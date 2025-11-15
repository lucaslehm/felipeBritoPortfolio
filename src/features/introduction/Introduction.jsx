import MainSubTitle from "../shared/components/MainSubTitle";
import MainTitle from "../shared/components/MainTitle";
import IntroBtn from "./components/introBtn";
import IntroTextBox from "./components/IntroTextBox";

function Introduction() {
  const introTitle = "Lorem Ipsum";
  const introText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis fermentum dui sit amet pretium. Etiam nec leo nec dolor ornare faucibus tincidunt ut quam.";

  const socialBtnContent = [
    {
      icon: "RiMailLine",
      text: "cfelipeleaob@gmail.com",
      bgColor: "#fffbeb",
      iconColor: "#441306",
      link: "mailto:cfelipeleaob@gmail.com?subject=Contato%20sobre%20portfólio&amp;body=Olá%20Felipe,%20tudo%20bem?%0D%0A%0D%0AEncontrei%20seu%20portfólio%20e%20gostaria%20de%20conversar.%0D%0A",
    },
    {
      icon: "RiLinkedinFill",
      text: "/in/cfelipebrito",
      bgColor: "#0a65c1",
      iconColor: "#ffffff",
      link: "https://www.linkedin.com/in/cfelipebrito/",
    },
    {
      icon: "RiBehanceFill",
      text: "/felipebrito39",
      bgColor: "#0a65c1",
      iconColor: "#ffffff",
      link: "https://www.behance.net/felipebrito39",
    },
    {
      icon: "RiInstagramLine",
      text: "@f_leaoz",
      bgColor: "#f201b9",
      iconColor: "#ffffff",
      link: "https://www.instagram.com/f_leaoz/",
    },
  ];
  return (
    <div>
      {/* Sessão container */}
      <div className="flex max-w-[1118px] m-auto mt-10 justify-between">
        {/* Sessão das info foto */}
        <div className="flex flex-col gap-5">
          <MainTitle>Olá! Me chamo Felipe!</MainTitle>
          <IntroTextBox title={introTitle} text={introText} />
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
          <img
            className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-[500px]"
            src="https://i.ibb.co/1YN7yDbn/foto-leao-header.jpg"
            alt="Foto Felipe Brito"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
