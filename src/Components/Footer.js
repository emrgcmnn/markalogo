import React, { useState , useEffect, useRef} from 'react'
import Facesvg from '../svg/face.svg'
import Twitsvg from '../svg/tw.svg'
import Whatsappsvg from '../svg/wa.svg'
import Inssvg from '../svg/ins.svg'







const Footer = () =>  {  
      
    return (
     
        <div name="footer" id="footer" class="text-center">
        <h1 class="text-3xl font-bold m-4">İLETİŞİM</h1>
        
        <div class="flex justify-center">
            
            <div class="w-1/4 text-center">
                <button>
                    <img src={Facesvg} alt="Facebook" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </div>

            <div class="w-1/4 text-center">
                <button>
                    <img src={Twitsvg} alt="Twitter" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </div>
            
            <div class="w-1/4 text-center">
                <button>
                    <img src={Whatsappsvg} alt="WhatsApp" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </div>
            
            <div class="w-1/4 text-center">
                <button>
                    <img src={Inssvg} alt="Instagram" class="mx-auto mb-2 w-8 h-8"/>
                </button>
            </div>
        </div>
    </div>
    
    )
}

export default Footer;