import LImage from '../img/LongLogo.png';
import SImage from '../img/ShortLogo.png';
import ContactMenu from './Contact';



import Burger from '../svg/burgerMenu.svg'
import React, { useState } from 'react'
import '../Components/Navbar.css';

import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'; // react-scroll'den gerekli bileşenleri import edin



const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className='bg-gradient-to-r from-black to-indigo-950 fixed z-10 top-0 w-full' style={{ position: 'sticky' }}>
        <div className='flex justify-around mx-auto items-center w-full px-8 py-2 '>
          <div className='flex items-center justify-between w-full md:w-auto  '>

            <div className='hover:cursor-pointer w-44 hidden md:flex'>
              <NavLink to="/Anasayfa">
                <img src={LImage} alt="" />
              </NavLink>
            </div>
            <div className='hover:cursor-pointer w-10 md:hidden '>
              <NavLink to="/Anasayfa">
                <img src={SImage} alt="" />
              </NavLink>
            </div>
            <div className='w-9 md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
              <img src={Burger} alt="Burger Menu" />
            </div>
          </div>

          <div>
            <div className='text-white font-medium md:flex hidden'>
           
              <Link
                className='p-2 mx-1 hover:bg-slate-600 rounded-lg'
                activeClassName="font-medium"
                to="anasayfa" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Ana Sayfa')}
              >
                Ana Sayfa
              </Link>

              <Link
                className='p-2 mx-1 hover:bg-slate-600 rounded-lg'
                to="kampanyalar" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Kampanyalar')}
              >
                Kampanyalar
              </Link>
              
              <Link
                className='p-2 mx-1 hover:bg-slate-600 rounded-lg'
                to="yontem" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Yöntem')}
              >
                Yöntem
              </Link>

              
              <Link
                className='p-2 mx-1 hover:bg-slate-600 rounded-lg'
                to="bizkim" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Biz Kimiz')}
              >
                Biz Kimiz
              </Link>
              
            
            </div>
          </div>

          <div
            className={`md:hidden shadow-2xl right-0 bg-gradient-to-b from-indigo-950 to-black absolute rounded-b-lg w-auto h-min bottom-0 
                    duration-300 ${open ? 'top-[55px]' : 'top-[-500%] '}`}
            style={{ transition: 'top 0.3s ease-in-out' }}
          >

              <Link
                className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '
                to="anasayfa" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Ana Sayfa')}
              >
                Ana Sayfa
              </Link>

              <Link
                className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '
                to="kampanyalar" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Kampanyalar')}
              >
                Kampanyalar
              </Link>
              
              <Link
                className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '
                to="yontem" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Yöntem')}
              >
                Yöntem
              </Link>  

             <Link
                className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '
                to="bizkim" // Footer bileşeninin "name" özelliği
                spy={true}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('Biz Kimiz')}
              >
                Biz Kimiz
              </Link>
              
              
          
          </div>
        </div>
      </nav>

    <div className="flex justify-center">
      <ContactMenu />
    </div>
    </>
  )
}

export default Navbar;
