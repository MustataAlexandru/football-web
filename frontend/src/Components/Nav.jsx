import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button, Navbar, Dropdown, Avatar } from "flowbite-react";
import About from "./Sectii";
import Galerie from "./Galerie";
import Sectii from "./Sectii";
import Echipe from "./Echipe";
import Anunturi from "./Anunturi";
import Contact from "./Contact";
import Register from "./Register";
import FirstPage from "./FirstPage";
import { useUser } from "../ContextProvider/UserProvider";

export default function Nav() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const {logout} = useUser();

  return (
    <div className="nav_container">
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img src={require('./craiova.png')} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
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
        
        <Navbar.Link href="#" active><Link to='/' element={<FirstPage />}>Home</Link></Navbar.Link>
        <Navbar.Link href="#" > <Link to='/sectii' element={<Sectii />}>Sections</Link> </Navbar.Link>
        <Navbar.Link href="#"><Link to='/echipe' element={<Echipe />}>Teams</Link></Navbar.Link>
        <Navbar.Link href="#"><Link to='/galerie' element={<Galerie />}>Gallery</Link></Navbar.Link>
        <Navbar.Link href="#"><Link to='/anunturi' element={<Anunturi />}>Anunturi</Link></Navbar.Link>
        <Navbar.Link href="#"><Link to='/contact' element={<Contact />}>Contact</Link></Navbar.Link>
        {!user && <Navbar.Link href="#"><Link to='/account' element={<Register />}>Login</Link></Navbar.Link>}
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
