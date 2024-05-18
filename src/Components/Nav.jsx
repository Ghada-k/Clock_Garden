// import { headerLogo } from  '../assets/images';
// // import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';
// import { useState } from 'react';
// import Hamburger from 'hamburger-react'
// const Nav = () => {
//   const [isOpen, setOpen] = useState(false)
//   return (
//     <header className="xl:bg-customBc  sticky top-0 padding-x py-4  z-20 w-11/12 ml-14 mr-4">
//       <nav className='  flex justify-between items-center max-container'>
//         <a  className="navbar-brand" href="/">
//           <img src={headerLogo} alt="Logo" width={280} height={40} />
//         </a>
//         <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
//           {navLinks.map((item)=>(
//             <li key={item.label}>
//               <a href={item.href} className="font-mono errat leading-normal text-lg text-slate-gray">
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className='hidden max-lg:block ml-60 '>
//           <Hamburger toggled={isOpen} toggle={setOpen} size={27}  />
//           {/* <ul className='flex-col flex justify-center items-center w-screen m-auto h-[50%]'> */}
//           {isOpen && (
//            <ul className="mt-2 ">
//             {navLinks.map((item) => (
//               <li key={item.label}>
//                 <a href={item.href} className=" h-full w-full block py-2 px-4 hover:bg-gray-100  errat leading-normal text-lg text-slate-gray">
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             </ul>)}
//         </div>
//         <div>
          
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Nav

import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-customBc sticky top-0 px-0 py-2 z-20 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a className="navbar-brand xl:ml-16 sm:ml-8" href="/">
          <img src={headerLogo} alt="Logo" width={235} height={20} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-mono errat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block ml-60">
          <Hamburger toggled={isOpen} toggle={setOpen} size={27} />
          {isOpen && (
            <ul className="mt-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="block py-2 px-4 hover:bg-gray-100 errat leading-normal text-lg text-slate-gray">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
