import React from 'react'

import AtesPilic from '../img/ates.jpeg'
import AtesPilic2 from '../img/ates2.jpeg'
import Isparta from '../img/isparta.jpeg'
import Kahve from '../img/kahve.jpeg'

const Referans = () => {
    
    return (
        <>
            <div>
                <div>REFERANSLARIMIZ</div>
                
                <div>
                    <div>
                        <img src={AtesPilic} ></img>
                    </div>
                    <div>
                        <img src={AtesPilic2} ></img>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={Isparta} ></img>
                    </div>
                    <div>
                        <img src={Kahve} ></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Referans;