import React from "react";
import mockupsImg from "../assets/images/image-mockups.png";
import introMobile from "../assets/images/bg-intro-mobile.svg";
import { LiaTimesSolid } from "react-icons/lia";
import introDesktop from "../assets/images/bg-intro-desktop.svg";
const HeroSection = ({ menus, isOpen,setIsOpen }) => {
  return (
    <div className=" bg-gray-50  ">
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-28 px-6 ">
          <ul className="relative bg-white rounded-md w-full max-w-xs py-10 shadow-lg text-center text-lg space-y-4">
            <LiaTimesSolid  onClick={() => setIsOpen(!isOpen)}  className="absolute right-3 top-3 cursor-pointer"/>
            {menus.map((menu, index) => {
              return (
                <>
                  <div key={index}>
                    <li className="hover:underline duration-300 cursor-pointer">
                      {menu}
                    </li>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      )}
      <div className="relative flex md:flex-row items-center flex-col-reverse text-center ">
        <div className="md:w-[500px] px-10 pt-3">
          <p className="text-4xl ">Next generation digital banking</p>
          <p className="text-gray-500 my-3">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop.for spending, saving,budgeting, investing, and much
            more.
          </p>
          <button className="p-2 px-4 text-white font-bold rounded-full bg-gradient-to-r from-Lime-Green to-Bright-Cyan cursor-pointer hover:opacity-80 duration-300">
            Request Invinite
          </button>
        </div>
        <div className="z-0 flex-nowrap">
          <img
            src={introMobile}
            alt=""
            className="md:hidden absolute top-0 left-0 w-full -z-10"
          />
          <img
            src={introDesktop}
            alt=""
            className=" hidden md:block absolute top-0 -right-10 md:-right-0 w-1/2 -z-10"
          />
          <img
            src={mockupsImg}
            alt=""
            className="-mt-20 md:max-w-[500px] md:absolute right-0 top-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
