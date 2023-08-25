
import React, { useState , useEffect, useRef} from 'react'
import UnderMenuCss from '../Components/UnderMenu.css'
import ImageGallery from './ImageGalery';
import { Link, animateScroll as scroll } from 'react-scroll'; 




const UnderMenu = () =>  {  

  const [open, setOpen] = useState(false);
    const handleLinkClick = () => {
        setOpen(false);};
      
    return (
        
    
        <div name="anasayfa" id="anasayfa" className='w-auto h-auto bg-black md:flex justify-center items-center mt-2 mb-12 mx-6 shadow-2xl border rounded-xl'>
            <div className=" md:p-8 p-6 md:w-2/3">
            <ImageGallery /> 
            </div>
        
            <div className='text-center md:p-8 pb-6 md:w-1/3'>
                <div >
                    <h1 class='ea900 m-1'>HAYLANİZDEKİ </h1>
                    <h2 className='ea800 m-1'>EŞSİZ LOGO</h2>
                </div>
               
                <h1 className='ea700 m-5'>Hayalinizdeki Benzersiz Logonun Sahibi Olmak Artık Çok Daha Kolay</h1>
                

                <Link
                to="footer" // Footer bileşeninin "name" özelliği
                spy={false}
                smooth={true}
                offset={-70} // Navbar yüksekliği kadar kaydırma
                duration={800}
                onClick={() => handleLinkClick('İletişim')}
              >
                     <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl m-3
                ">
                SİPARİŞ OLUŞTUR
                </button>
              </Link>
           

            </div>
        </div>

       
      
       
    )
}

export default UnderMenu;