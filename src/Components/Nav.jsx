import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { useState } from 'react';
import Hamburger from 'hamburger-react';



const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-customBc sticky top-0 px-4 py-2 z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a className="navbar-brand xl:ml-16 sm:ml-8" href="/">
          <img src={headerLogo} alt="Logo" width={235} height={20} />
        </a>
        <ul className="flex-1  justify-center items-center gap-16 hidden lg:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="font-mono errat leading-normal text-lg text-slate-gray hover:text-primary transition duration-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden ml-auto">
          <Hamburger toggled={isOpen} toggle={setOpen} size={27} color="#4A5568" />
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-30 flex justify-end">
          <div className="bg-white w-3/4 max-w-xs h-full p-6 shadow-lg overflow-y-auto relative">

            <ul className="mt-12 space-y-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="block py-4 px-6 bg-gray-200 rounded-full text-center text-lg text-gray-700 hover:bg-gray-300 transition duration-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black bg-opacity-25 flex-grow" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </header>
  );
};

export default Nav;

