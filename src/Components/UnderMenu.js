
import React, { useState , useEffect, useRef} from 'react'
import UnderMenuCss from '../Components/UnderMenu.css'
import ImageGallery from './ImageGalery';





const UnderMenu = () =>  {  
      
    return (
        
    
        <div className='w-full h-auto bg-black md:flex justify-center items-center m-1 border rounded-xl'>
            <div className="md:w-3/4 md:p-8 p-6">
            <ImageGallery />
            </div>
        
            <div className='text-center md:p-8 pb-6'>
                <div >
                    <h1 class='ea900 m-1'>HAYLANİZDEKİ </h1>
                    <h2 className='ea800 m-1'>EŞSİZ LOGO</h2>
                </div>
               
                <h1 className='ea700 m-5'>Hayalinizdeki Benzersiz Logonun Sahibi Olmak Artık Çok Kolay</h1>
                
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl m-3">
                HADİ BAŞLAYALIM
                </button>

            </div>
        </div>

       
      
       
    )
}

export default UnderMenu;