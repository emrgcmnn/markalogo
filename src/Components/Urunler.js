
import React, { useState } from 'react'
import Kambir from '../svg/kambir.svg'
import Kamiki from '../svg/kamiki.svg'
import { Link, animateScroll as scroll } from 'react-scroll'; 




const Urunler = () =>  {  
    const [open, setOpen] = useState(false);
    const handleLinkClick = () => {
        setOpen(false);};
      
    return (
<body name="kampanyalar" id="kampanyalar" class="bg-gray-100 p-3">
    <div class="p-6  md:p-2">
        <h1 class="text-2xl font-bold text-center pb-2 md:pb-4 ">FIRSAT PAKETLERİ</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-8">
            
            <div class="bg-gradient-to-r from-sky-300 to-teal-300 rounded-lg shadow-md flex p-4 m-2">
                <div className="w-1/4 flex items-center">
                    <img src={Kambir} alt="Logo" />
                </div>
                <div className="ml-4">
                    <h2 class="text-lg font-semibold">Logo Paketi</h2>
                    <p className='pr-8'>Kurumsal Logo + Kartvizit paketinde %50 indirim fırsatı için hemen teklifini al fırsatı kaçırma.</p>
                </div>
            </div>

            <div class="bg-gradient-to-r from-teal-300 to-sky-300 rounded-lg shadow-md flex p-4 m-2">
                <div className="w-1/4 flex items-center">
                    <img src={Kamiki} alt="Logo" />
                </div>
                <div className="ml-4">
                    <h2 class="text-lg font-semibold">WebSitesi Paketi</h2>
                    <p className='pr-8'> Websitesi + Kurumsal Logo paketinde %60 indirim için hemen teklifini al fırsatı kaçırma.</p>
                </div>
            </div>
           
        </div>

        <div class="flex justify-center items-center bg-gradient-to-b from-indigo-950 to-black border rounded-xl pb-6 ">
            <div class="text-center">
                <h1 class="ttext-lg font-semibold mb-3 text-white pt-6 pb-3">FORMU DOLDURUN VE HEMEN SİPARİŞ VERİN</h1>
                <Link
                to="form" // Footer bileşeninin "name" özelliği
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
    </div>
</body>
    

       
      
       
    )
}

export default Urunler;