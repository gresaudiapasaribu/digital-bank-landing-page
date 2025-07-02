import React from "react";
import logo from "../assets/images/logo.svg";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

const Header = ({ isOpen, setIsOpen, menus }) => {
  return (
    <div className="flex justify-between bg-white ">
      <img src={logo} alt="" className="w-[130px] md:w-[145px] bg-white" />
      <button
        className="cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <LiaTimesSolid fontSize={35} /> : <IoIosMenu fontSize={35} />}
      </button>
      <ul className="md:flex gap-7 hidden ">
        {menus.map((menu, index) => {
          return (
            <div key={index}>
              <li className="text-gray-400 cursor-pointer">{menu}</li>
            </div>
          );
        })}
      </ul>
      <button className="md:block hidden p-2 px-4 text-white font-bold rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan cursor-pointer hover:opacity-80 duration-300">
        Request Invinite
      </button>
    </div>
  );
};

export default Header;
