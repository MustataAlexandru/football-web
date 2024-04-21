import { Link } from "react-router-dom";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

import Galerie from "./Galerie";
import Sectii from "./Sectii";
import Echipe from "./Echipe";
import Anunturi from "./Anunturi";
import Contact from "./Contact";
import Register from "./Register";
import FirstPage from "./FirstPage";
import { useUser } from "../ContextProvider/UserProvider";
import {useState} from 'react';


export default function Nav() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const {logout} = useUser();

  const [navActive , setNavActive] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false
  });

  return (
    <div className="nav_container">
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src={require('./craiova.png')} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Universitatea Craiova</span>
      </Navbar.Brand>
      {user && (
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.username}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><button onClick={logout}>Sign out</button></Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>)
}
      <Navbar.Collapse>
        
        <Navbar.Link href="#" active ={navActive.first} onClick={() =>setNavActive({first: true, second: false , third: false , fourth: false , fifth: false , sixth: false})} ><Link to='/' element={<FirstPage />}>Home</Link></Navbar.Link>
        <Navbar.Link href="#" active={navActive.second} onClick={() =>setNavActive({first: false, second: true , third: false , fourth: false , fifth: false , sixth: false})}> <Link to='/sectii' element={<Sectii />}>Sections</Link> </Navbar.Link>
        <Navbar.Link href="#" active={navActive.third} onClick={() =>setNavActive({first: false, second: false , third: true , fourth: false , fifth: false , sixth: false})}><Link to='/echipe' element={<Echipe />}>Teams</Link></Navbar.Link>
        <Navbar.Link href="#" active={navActive.fourth} onClick={() =>setNavActive({first: false, second: false , third: false , fourth: true , fifth: false , sixth: false})}><Link to='/galerie' element={<Galerie />}>Gallery</Link></Navbar.Link>
        <Navbar.Link href="#" active={navActive.fifth} onClick={() =>setNavActive({first: false, second: false , third: false , fourth: false , fifth: true , sixth: false})}><Link to='/anunturi' element={<Anunturi />}>Anunturi</Link></Navbar.Link>
        <Navbar.Link href="#" active={navActive.sixth} onClick={() =>setNavActive({first: false, second: false , third: false , fourth: false , fifth: false , sixth: true})}><Link to='/contact' element={<Contact />}>Contact</Link></Navbar.Link>
        {!user && <Navbar.Link href="#" active={navActive.seventh} ><Link to='/account' element={<Register />}>Login</Link></Navbar.Link>}
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
