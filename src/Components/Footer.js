import React, { useState , useEffect, useRef} from 'react'
import Facesvg from '../svg/face.svg'
import Twitsvg from '../svg/tw.svg'
import Whatsappsvg from '../svg/wa.svg'
import Inssvg from '../svg/ins.svg'







const Footer = () =>  {  
      
    return (
     
        <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">İletişim</h1>
        <div class="flex justify-center">
            <div class="w-1/4 text-center">
                <img src={Facesvg} alt="Facebook" class="mx-auto mb-2 w-8 h-8"/>
                <p class="font-semibold">Facebook</p>
            </div>
            <div class="w-1/4 text-center">
                <img src={Twitsvg} alt="Twitter" class="mx-auto mb-2 w-8 h-8"/>
                <p class="font-semibold">Twitter</p>
            </div>
            <div class="w-1/4 text-center">
                <img src={Whatsappsvg} alt="WhatsApp" class="mx-auto mb-2 w-8 h-8"/>
                <p class="font-semibold">WhatsApp</p>
            </div>
            <div class="w-1/4 text-center">
                <img src={Inssvg} alt="Instagram" class="mx-auto mb-2 w-8 h-8"/>
                <p class="font-semibold">Instagram</p>
            </div>
        </div>
    </div>
    
    )
}

export default Footer;