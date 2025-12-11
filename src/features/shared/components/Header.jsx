import { RiMenuFill, RiCloseLine } from "@remixicon/react";
import LogoFelipeBrito from "../../header/components/LogoFelipeBrito";
import Nav from "../../header/components/Nav";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-200 ring-3 relative">
      <div className="max-w-[1118px] m-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="#top" className="flex items-center gap-4 cursor-pointer">
          <LogoFelipeBrito />
          <span className="font-bold text-2xl text-orange-950">
            Felipe Brito
          </span>
        </a>

        {/* NAV NORMAL (desktop) */}
        <div className="hidden md:block">
          <Nav />
        </div>

        {/* BOTÃO MENU (mobile) */}
        <button
          className={`block md:hidden text-orange-950 text-3xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenuFill />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-orange-100 overflow-hidden transition-all duration-300 ease-in-out shadow-md ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <Nav />
      </div>
    </header>
  );
}

export default Header;
