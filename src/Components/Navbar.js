import LImage from '../img/LongLogo.png';
import SImage from '../img/ShortLogo.png';

import Burger from '../svg/burgerMenu.svg'
import React, { useState , useEffect, useRef} from 'react'
import '../Components/Navbar.css';

import { Routes, Root, Link, NavLink } from 'react-router-dom';



const Navbar = () =>  {
    const[open , setOpen] = useState(false);
    

    const handleLinkClick = () => {
        setOpen(false);
      };

      
    return (
        <>
    

        <nav className='bg-gradient-to-r from-black to-indigo-950'>
            <div className=' flex justify-around mx-auto items-center w-full px-8 py-2 '>
                <div className=' flex items-center justify-between w-full  md:w-auto  '> 
                    
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
                    <div className='w-9  md:hidden '  onClick={()=> setOpen(!open)}>                    
                                <img src={Burger} alt="" />
                    </div>
                </div>
                
                <div>            
                    <div className='text-white font-medium md:flex hidden'>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/AnaSayfa">Ana Sayfa</NavLink>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/Urunler">Ürünler</NavLink>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/Iletisim">İletişim</NavLink>
                        <NavLink className='p-2 mx-1 hover:bg-slate-600 rounded-lg' to="/BizKimiz">Biz Kimiz</NavLink>
                    </div>
                </div>
                
                <div 
                    className={`md:hidden  shadow-2xl   right-0 bg-gradient-to-b from-indigo-950  to-black   absolute rounded-b-lg w-auto h-min bottom-0 
                    duration-300 ${open ? 'top-[55px]' : 'top-[-100%] '}`
                        }
                >                     
                    <NavLink onClick={handleLinkClick}  to="/Urunler" className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full  ' >Ürünler</NavLink>
                    <NavLink onClick={handleLinkClick}  to="/BizKimiz" className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '>Biz Kimiz</NavLink>
                    <NavLink onClick={handleLinkClick}  to="/Iletisim" className='block px-6 py-3 m-1 font-extrabold text-slate-200 hover:bg-slate-200 hover:text-gray-800 rounded-full '>İletişim</NavLink>
                    
                </div>
            </div>
        
        </nav>

       
        </>
       
    )
}

export default Navbar;