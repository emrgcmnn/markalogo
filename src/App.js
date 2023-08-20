import './App.css';
import Navbar from '../src/Components/Navbar';
import UnderMenu from './Components/UnderMenu';
import { Routes, Route,Switch , Link, NavLink } from 'react-router-dom';

import BizKimiz from '../src/pages/BizKimiz'
import Iletisim from '../src/pages/Iletisim'
import Urunler from '../src/pages/Urunler'


function App() {
  return (
    <>
      
        <Navbar />  
        <UnderMenu />     
        
        
      
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
