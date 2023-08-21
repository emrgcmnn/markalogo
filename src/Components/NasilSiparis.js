import React, { useState , useEffect, useRef} from 'react'
import Gosvg from '../svg/go.svg'
import Formsvg from '../svg/form.svg'
import Sendsvg from '../svg/send.svg'
import Starsvg from '../svg/star.svg'

import Teklifsvg from '../svg/teklif.svg'
import Onaysvg from '../svg/onay.svg'
import Hazirsvg from '../svg/hazir.svg'
import Teslimsvg from '../svg/teslim.svg'






const NasilSiparis = () =>  {  
      
    return (
        <>
    <div className='md:mx-24 md:mt-12 mx-6 mt-12'>
        <div class="text-center mb-8">
            <h1 class="text-2xl font-bold">Nasıl Sipariş Veririm?</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-8">
            <div class="bg-white rounded-lg shadow-md flex p-4">
                <div className="w-1/4 flex items-center">
                    <img src={Gosvg} alt="Logo" />
                </div>
                <div className="ml-4">
                    <h2 class="text-lg font-semibold">SAYFAYA GİT</h2>
                    <p>Sipariş ver butonuna tıklayarak gittiğiniz sayfada önünüze bir sipariş formu gelecek</p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md flex p-4">
                <div className="w-1/4 flex items-center">
                    <img src={Formsvg} alt="Logo" />
                </div>
                <div className="ml-4">
                    <h2 class="text-lg font-semibold">FORMU DOLDUR</h2>
                    <p>Sipariş ver butonuna tıklayarak gittiğiniz sayfada önünüze bir sipariş formu gelecek.
                    Burada formu eksiksiz doldurmanızı rica edeceğiz.</p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md flex p-4">
                <div className="w-1/4 flex items-center">
                    <img src={Starsvg} alt="Logo" />
                </div>
                <div className="ml-4">
                    <h2 class="text-lg font-semibold">DETAY VER</h2>
                    <p>Formda vereceğiniz bilgilerin doğruluğu ve ekstra ekleyeceğiniz istek ve ayrıntılarınız,
                    ilerlememizi hızlandıracaktır.</p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md flex p-4">
                <div className="w-1/4 flex items-center">
                    <img src={Sendsvg} alt="Logo" />
                </div>
                <div className="ml-4">
                    <h2 class="text-lg font-semibold">FORMU GÖNDER</h2>
                    <p>Formu gönderdikten hemen sonra mesai saatleri içindeyse 10 dakika içinde WhatsApp aracılığıyla
                    ekibimiz sizinle iletişime geçecektir.</p>
                </div>
            </div>
        </div>



    <div class="text-center mb-8">
        <h1 class="text-2xl font-bold">Teklifi Onaylarsanız Süreç Nasıl İlerliyecek?</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-8">

        <div class="bg-white rounded-lg shadow-md flex p-4">
            <div className="w-1/4 flex items-center">
                <img src={Teklifsvg} alt="Logo" />
            </div>
            <div className="ml-4">
                <h2 class="text-lg font-semibold">TEKLİF</h2>
                <p>Ekibimiz whatsapp aracılığıyla sizinle iletişime geçtikten sonra verdiğiniz bilgiler doğrultusunda
                oluşturduğu teklifi size sunacak</p>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-md flex p-4">
            <div className="w-1/4 flex items-center">
                <img src={Onaysvg} alt="Logo" />
            </div>
            <div className="ml-4">
                <h2 class="text-lg font-semibold">ONAYLAMA</h2>
                <p>Teklifi onayladığınız taktirde forumda oluşturduğunuz bilgiler doğrultusunda ekibimiz hemen çalışmaya
                başlayacak.</p>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-md flex p-4">
            <div className="w-1/4 flex items-center">
                <img src={Hazirsvg} alt="Logo" />
            </div>
            <div className="ml-4">
                <h2 class="text-lg font-semibold">HAZIRLAMA</h2>
                <p>Ekibimiz sizin verdiğiniz bilgiler doğrultusunda en fazla 2 iş günü içinde 3 farklı logo tasarımıyla
                sizin beğeninize sunacak</p>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-md flex p-4">
            <div className="w-1/4 flex items-center">
                <img src={Teslimsvg} alt="Logo" />
            </div>
            <div className="ml-4">
                <h2 class="text-lg font-semibold">TESLİM</h2>
                <p>Ekibimiz size sunduğu 3 logodan seçtiğiniz bir tanesinin üzerinde sizin istekleriniz doğrultusunda
                oynamalar yaparak Logonuzu teslim edecek</p>
            </div>
        </div>

    </div>
    </div>
    
    



            
        
    
      </>
    )
}

export default NasilSiparis;