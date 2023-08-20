import './App.css';
import Navbar from '../src/Components/Navbar';
import UnderMenu from './Components/UnderMenu';
import NasilSiparis from './Components/NasilSiparis'
import Bizkimiz from './Components/BizKimiz'
import Footer from './Components/Footer'
import { Routes, Route,Switch , Link, NavLink } from 'react-router-dom';

import BizKimiz from '../src/pages/BizKimiz'
import Iletisim from '../src/pages/Iletisim'
import Urunler from '../src/pages/Urunler'


function App() {
  return (
    <>
      
        <Navbar />  
        <UnderMenu />     
        
        <hr className=' border-teal-900'/>

        <NasilSiparis /> 

        <hr className=' border-teal-900'/>

        <div class="flex justify-center items-center h-auto md:mx-24 md:mt-12 mx-6 mt-12 bg-gradient-to-b from-indigo-950 to-black border rounded-xl">
          <div class="text-center">
              <h1 class="text-3xl font-bold mb-3 p-6 text-white">Hemen sipariş vermek için formu doldurun</h1>
              <button class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 mb-6 rounded-xl m-3">
                  SİPARİŞ OLUŞTUR
              </button>
          </div>
        </div>

        <hr className=' border-teal-900 mt-12'/>
        

        <Bizkimiz /> 

        <hr className=' border-teal-900 mt-12'/>
        

        <Footer /> 


      
        {/* <Routes>
          <Route path="/" element = {
            <>
               <div class="min-h-screen flex justify-center items-center">
                  <div class="text-center">
                    <div className='m-6'>
                      <h1 class="text-4xl text-white font-bold">Welcome My Website </h1>
                    </div>
                
                    <div className='m-6 '>
                  
                    </div>
                  </div>
                </div>
            </>
          } />
          <Route path="/AnaSayfa" element = {<AnaSayfa />} />
          <Route path="/BizKimiz" element = {<BizKimiz />} />
          <Route path="/Iletisim" element = {<Iletisim />} />
          <Route path="/Urunler" element = {<Urunler />} />
        </Routes> */}
       
    </>
  );
}

export default App;
