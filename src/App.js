import './App.css';
import Navbar from '../src/Components/Navbar';
import UnderMenu from './Components/UnderMenu';
import NasilSiparis from './Components/NasilSiparis'
import Bizkimiz from './Components/BizKimiz'
import Kampanyalar from './Components/Urunler'
import Form from './Components/Form'




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



     
       </>
    
  );
}

export default App;
