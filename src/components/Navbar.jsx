import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";




const Navbar = () => {

  
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to={`/`}>
        <img src={`./logo1.png`} alt="" className="w-[20%] rounded-full border-[1px] border-[#51d7e0]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-xl ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
          
        <li className={`font-poppins font-normal cursor-pointer text-xl text-dimWhite ml-10`}>
          <NavLink to={'/login'} className="font-white font-normal cursor-pointer text-xl">
            Sign In
          </NavLink>

        </li>
        <li className={`font-poppins font-normal cursor-pointer text-xl text-dimWhite ml-10`}>
          <NavLink to={'/register'} className="font-white font-normal cursor-pointer text-xl">
            Sign Up
          </NavLink>

        </li>
      </ul>
      
      <div className="sm:hidden cursor-pointer hover:shadow-xl shadow-white flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className={`font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}>
          <NavLink to={'/login'} className="mb-4 my-2">
            Sign In
          </NavLink>

        </li>
        <li className={`font-poppins font-medium cursor-pointer text-[16px] text-dimWhite`}>
          <NavLink to={'/register'} className="mb-4 mt-6">
            Sign Up
          </NavLink>

        </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
