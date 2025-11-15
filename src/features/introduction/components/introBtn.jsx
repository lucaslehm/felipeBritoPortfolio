import * as RemixIcons from "@remixicon/react";

function IntroBtn({ icon, btnText, bgColor, iconColor, link }) {
  const IconComponent = RemixIcons[icon];

  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col ring-3 ring-[#461901] shadow-[5px_5px_0px_#461901] w-33 h-30 p-2 justify-between cursor-pointer transition-all hover:scale-102"
      style={{ backgroundColor: bgColor }}
    >
      <IconComponent size={45} color={iconColor} />
      <span
        className="text-[.55em] font-semibold self-end"
        style={{ color: iconColor }}
      >
        {btnText}
      </span>
    </a>
  );
}

export default IntroBtn;
