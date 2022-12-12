import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus'
import Mission from './Components/mission';
import Partner from './Components/Partner';
import Facilty from './Components/Facilty';
import Director from './Components/Director';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/facilty' element={<Facilty/>}/>
        <Route path='/director' element={<Director/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
