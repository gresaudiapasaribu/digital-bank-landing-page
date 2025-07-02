import React from "react";
import logoLight from "../assets/images/logo-light.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
const Footer = ({ menusFooter }) => {
  return (
    <div className="p-8 bg-blue-950 flex items-center flex-col justify-center gap-5 text-white">
      <img src={logoLight} alt="" className="w-[150px]" />
      <div className="flex items-center gap-5">
        <img src={facebook} alt="" />
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
        <img src={instagram} alt="" />
      </div>
      <ul className="flex flex-col gap-2 text-center">
        {menusFooter.map((menu, index) => {
          return (
            <div key={index}>
              <li className="cursor-pointer">{menu}</li>
            </div>
          );
        })}
      </ul>
      <button className="p-2 px-4 text-white font-bold rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan cursor-pointer hover:opacity-80 duration-300">
        Request Invinite
      </button>
      <p className="text-gray-400 font-bold text-lg">
        &copy; Easybank. All rigths reserved
      </p>
    </div>
  );
};

export default Footer;
