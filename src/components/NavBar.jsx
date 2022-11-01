import { NavLink } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

function NavBar() {
  return (
    <div>
      <div className="flex flex-row gap-x-5 border-b border-amber-700 bg-orange-100 py-2 px-2 text-sm font-semibold">
        <span>Atención al cliente</span>
        <span>Ventas teléfonicas</span>
        <span>Whatsapp</span>
      </div>
      <div className="flex flex-row items-stretch justify-between border-b border-neutral-300 px-2 text-lg font-bold">
        <div className="flex flex-row place-items-center gap-2 text-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categorias">Categorias</NavLink>
        </div>
        <div className="flex flex-row place-items-center gap-2 text-center">
          <BiUserCircle />
          <span>Mi cuenta</span>
          <span>Carrito</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
