import { useState } from "react";
import { dataLink } from "./Navbar-config";
import { Button } from "../../features/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black h-14 w-full max-w-3xl text-white mt-3 rounded-2xl gap-36 px-16 flex flex-row justify-between items-center relative">
      <h1>Logo</h1>
      <div className="hidden md:flex flex-row gap-6">
        {dataLink.map((items, index) => (
          <Button key={index} {...items} style="" />
        ))}
      </div>

      <button 
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`bg-white h-0.5 w-6 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
        <span className={`bg-white h-0.5 w-6 mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`bg-white h-0.5 w-6 mt-1.5 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
      </button>
      
      <div className={`
        absolute top-full left-0 right-0 bg-black rounded-2xl mt-2 px-8 py-4
        transition-all duration-300 ease-in-out
        md:hidden
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div className="flex flex-col gap-4">
          {dataLink.map((items, index) => (
            <Button 
              key={index} 
              {...items} 
              style=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}