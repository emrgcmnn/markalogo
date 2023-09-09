import React, { useState } from 'react';
import Inssvg from '../svg/ins.svg'
import Whatsappsvg from '../svg/wa.svg';
import Cimg from '../img/contact.png'


function ContactMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className="fixed bottom-4 right-4">
        <div className={`relative z-50 bg-white shadow-lg rounded-r-3xl ${menuOpen ? '' : ' border-blue-500'}`}> 
          <button onClick={toggleMenu} className={`rounded-full p-2 w-14 h-14 flex items-center justify-center ${menuOpen ? 'z-50' : 'z-10'}`}>
          <img src={Cimg} alt="Contact" className="w-10 h-10 "/>
          </button>
          <div className="flex flex-row space-x-2 bg-slate-100 bg- p-2 rounded-l-3xl shadow-lg absolute bottom-0 right-14"
               style={{ right: menuOpen ? '-200px' : '55px', transition: 'right 0.3s ease-in-out' }}>
            <a target="_blank" href='https://wa.me/905549092598' className="text-center">
              <button className="brounded-full p-1 w-10 h-10 flex items-center justify-center">
                <img src={Whatsappsvg} alt="WhatsApp" className="w-10 h-10"/>
              </button>
            </a>
            <a target="_blank" href='https://www.instagram.com/markalogo_tasarim' className="text-center">
              <button className=" rounded-full p-1 w-10 h-10 flex items-center justify-center">
                <img src={Inssvg} alt="Instagram" className="w-10 h-10"/>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactMenu;
  