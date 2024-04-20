
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import About from "./Sectii";
import Galerie from "./Galerie";
import Sectii from "./Sectii";
import Echipe from "./Echipe";
import Anunturi from "./Anunturi";
import Contact from "./Contact";
import Register from "./Register";

export default function Nav() {
  return (
   <div className="nav_container">
    <Navbar fluid rounded>
      <Navbar.Brand >
        <img src={require('./imgs/craiova-logo.png')} className="mr-3 h-6 sm:h-9" alt="SportDirect" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Universitatea Craiova</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <Link to= '/' >Home</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Link to ='/sectii' element={<Sectii />}>Sections</Link> 
        </Navbar.Link>
        <Navbar.Link href="#"><Link to ="/echipe" element={<Echipe/>}>Teams</Link></Navbar.Link>
        <Navbar.Link href="#">
        <Link to ="/anunturi" element={<Anunturi/>}>Announces</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
        <Link to ="/galerie" element={<Galerie/>}>Gallery</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
        <Link to ="/contact" element={<Contact/>}>Contact</Link>
        </Navbar.Link>
        <Navbar.Link href="#">
        <Link to ="/register" element={<Register/>}><button className="nav_btn">Login</button></Link>
        </Navbar.Link>
      </Navbar.Collapse>

     
    </Navbar>
    </div>
  );
}