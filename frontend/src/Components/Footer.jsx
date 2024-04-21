import { Footer } from "flowbite-react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialSpotify } from "react-icons/sl";

export default function Foter() {
  return (
    <Footer className="mt-8 footer" container>
      <Footer.Copyright href="#" by="Mustata Alexandru-Cristian @ PROIECT LABORATOR WEB" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="https://www.instagram.com/mustata_alexandru123/" ><TiSocialFacebook size={32} /></Footer.Link>
        <Footer.Link href="https://www.instagram.com/mustata_alexandru123/"><TiSocialInstagram size={32}/></Footer.Link>
        <Footer.Link href="https://www.instagram.com/mustata_alexandru123/"><TiSocialLinkedin size={32} /></Footer.Link>
        <Footer.Link href="https://www.instagram.com/mustata_alexandru123/"><SlSocialSpotify size={32}/></Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
