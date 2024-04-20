import "./App.css";
import Nav from "./Components/Nav";
import { Route, Routes, Link } from "react-router-dom";
import Sectii from "./Components/Sectii";
import Galerie from "./Components/Galerie";
import Echipe from "./Components/Echipe";
import Contact from "./Components/Contact";
import Anunturi from "./Components/Anunturi";
import FirstPage from "./Components/FirstPage";
import { Toast } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import Register from "./Components/Register";

function App() {
  return (
    <div className="container">
      <Nav />
      <Toast className='absolute-bot-right'>
        <div className="flex gap-1">
          <MdPermIdentity className="h-5 w-5 cl-black" />
      <div className="ml-3 text-sm font-normal"><strong>Mustata Alexandru-Cristian</strong></div>
        
        </div>
      <Toast.Toggle />
    </Toast>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/sectii" element={<Sectii />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/echipe" element={<Echipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/anunturi" element={<Anunturi />} />
        <Route path='/register' element={<Register /> } />
      </Routes>
    </div>
  );
}

export default App;
