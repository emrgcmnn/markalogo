
import React, { useState , useEffect, useRef} from 'react'
import Kambir from '../svg/kambir.svg'
import Kamiki from '../svg/kamiki.svg'





const Urunler = () =>  {  
      
    return (
<body class="bg-gray-100">
    <div class="p-6 md:p-12">
        <h1 class="text-2xl font-bold text-center pb-6 md:pb-12 ">KAMPANYALAR</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-8">
            
            <div class="bg-gradient-to-r from-indigo-300 to-sky-200 rounded-lg shadow-md flex p-4 m-2">
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

        <div class="flex justify-center items-center bg-gradient-to-b from-indigo-950 to-black border rounded-xl m-6 p-6">
            <div class="text-center">
                <h1 class="text-2xl font-bold mb-3 text-white">Hemen sipariş vermek için formu doldurun</h1>
                <button class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl">SİPARİŞ OLUŞTUR</button>
            </div>
        </div>
    </div>
</body>
    

       
      
       
    )
}

export default Urunler;