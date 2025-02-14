import React, { useState } from 'react';

const Navbar = () => {
  const [hamBurgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamBurgerOpen);
  };

  return (
    <div>
      <header className="nav flex justify-between items-center fixed w-full h-2 bg-white shadow-lg shadow-gray-500/50 p-6 z-10">
        <h5>
          <span className="font-bold">BR</span> Architects
        </h5>

        <span className="block sm:hidden" onClick={toggleHamburger}>
          ☰
        </span>


        <section className="flex justify-around gap-10 sm:block hidden">
          <a href="#Projects" className="hover:bg-gray-200 p-2">
            Projects
          </a>
          <a href="#About" className="hover:bg-gray-200 p-2">
            About
          </a>
          <a href="#Contact" className="hover:bg-gray-200 p-2">
            Contacts
          </a>
        </section>

    
        <section
          className={`${
            hamBurgerOpen ? 'block' : 'hidden'
          } sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-20`}
        >
          <a href="#Projects" className="block hover:bg-gray-400 p-2" onClick={toggleHamburger}>
            Projects
          </a>
          <a href="#About" className="block hover:bg-gray-400 p-2" onClick={toggleHamburger}>
            About
          </a>
          <a href="#Contact" className="block hover:bg-gray-200 p-2" onClick={toggleHamburger}>
            Contacts
          </a>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
