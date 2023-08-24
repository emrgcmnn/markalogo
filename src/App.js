import './App.css';
import Navbar from '../src/Components/Navbar';
import UnderMenu from './Components/UnderMenu';
import NasilSiparis from './Components/NasilSiparis'
import Bizkimiz from './Components/BizKimiz'
import Footer from './Components/Footer'
import Kampanyalar from './Components/Urunler'
import Form from './Components/Form'
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
        
        <Kampanyalar /> 

        <hr className=' border-teal-900 '/>

        <Bizkimiz /> 

        <hr className=' border-teal-900 mt-12'/>
        <Form/>



      
       {/* <Routes>
            
  
          <Route path="/AnaSayfa" element = {<AnaSayfa />} />
          <Route path="/BizKimiz" element = {<BizKimiz />} />
          <Route path="/Iletisim" element = {<Iletisim />} />
          <Route path="/Urunler" element = {<Urunler />} />
        </Routes>  */}
       </>
    
  );
}

export default App;
