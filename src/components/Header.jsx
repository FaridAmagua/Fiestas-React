import { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xk:w-1/6 text-cent -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          Logo 
        </a>
        {/* <span className="text-2xl font-bold relative p-1 bg-red-200">LOGO</span> */}
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
        showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 
         transition-all duration-500`}
      >
        <a href="" className="">
          ENTRADAS
        </a>
        <a href="" className="">
          EVENTOS
        </a>
        <a href="" className="">
          RESERVAS
        </a>
        <a href="" className="">
          PULSEGIRLS
        </a>
      </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine/>:<RiMenu3Fill/>}
      </button>
    </header>
  );
};

export default Header;
