import { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-primary text-white">
      <a href="#" className="text-2xl relative mr-3">
        PULSE
        {/* <span>x</span> */}
      </a>
      <div className="xk:w-1/6 text-cent -mt-4">
        {/* <span className="text-2xl font-bold relative p-1 bg-red-200">LOGO</span> */}
      </div>
      <nav
        className={`fixed bg-black w-[80%] md:w-[40%]  xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center md:justify-start gap-5
   transition-all duration-500 ${
     // Añadimos una clase condicional para alinear al centro en ciertos tamaños de pantalla
     window.innerWidth >= 768 && window.innerWidth < 1280
       ? "md:justify-center"
       : ""
   }`}
      >
        <a href="" className="nav-link">
          Entradas
        </a>
        <a href="" className="nav-link">
          Reservas
        </a>
        <a href="" className="nav-link">
          Eventos
        </a>
        <a href="" className="nav-link">
          PulseGirls
        </a>
      </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
