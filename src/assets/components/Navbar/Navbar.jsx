import Link_items from "./Link_items/Link_items";
import { VscThreeBars } from "react-icons/vsc";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: "home", path: "/", name: "Home" },
    { id: "about", path: "/about", name: "About Us" },
    { id: "services", path: "/services", name: "Services" },
    { id: "portfolio", path: "/portfolio", name: "Portfolio" },
    { id: "contact", path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-slate-600 p-4 lg:p-0 text-white">
      <div className="lg:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <RxCrossCircled className="text-2xl" />
        ) : (
          <VscThreeBars className="text-2xl" />
        )}
      </div>
      <div className={`rounded-2xl duration-1000 bg-gray-800 absolute p-6 mx-4 lg:static lg:duration-0 lg:top-0 lg:flex lg:bg-slate-600 lg:p-4 
      ${open? 'left-8':'-left-60'}
      lg:justify-center lg:space-x-4`}>
        {routes.map((route) => (
          <Link_items key={route.id} route={route}></Link_items>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
