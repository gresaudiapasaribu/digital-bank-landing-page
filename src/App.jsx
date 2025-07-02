import React, { useState } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Finance from "./Components/FInance";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

const App = () => {
  const menusFooter = [
    "About US",
    "Contact",
    "Blog",
    "careers",
    "Support",
    "Privacy Policy",
  ];
  const menus = ["Home", "About", "Contact", "Blog", "Carrers"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="bg-white py-5 px-10 sticky top-0  shadow-sm  z-[60]">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} menus={menus} />
      </div>
      <HeroSection menus={menus} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Finance />
      <Articles />
      <Footer menusFooter={menusFooter} />
    </div>
  );
};

export default App;
