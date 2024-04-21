import React, { useRef , useState} from 'react'
import Foter from './Footer'
import { Button, Label, TextInput , Textarea} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Card } from "flowbite-react";
import {TiSocialFacebook , TiSocialInstagram , TiSocialLinkedin , TiSocialPinterest , TiSocialTwitter , TiSocialGithub , TiSocialDribbble , TiSocialFlickr ,TiSocialYoutube} from 'react-icons/ti'
import emailjs from '@emailjs/browser';
import { Alert } from "flowbite-react";
const textData = "At Universitatea Craiova, we are proud to stand as one of Romania's premier institutions of higher education, known for our commitment to excellence, innovation, and the development of young minds. Established in 1947, our university has grown to embody the spirit of education and research, fostering an environment where academic potentials are realized, and futures are shaped."

export default function Contact() {
  const form = useRef();
  const [alert , setAlert] = useState('hidden');
  const alertToggle =() => {
    setAlert('visible');
        setTimeout(() => {
          setAlert('hidden');
        }, 4000);
  }
  const submitHandler = (e) => {
          e.preventDefault();
      emailjs.sendForm('service_y5xgnac' , 'template_etfjgl8', form.current ,'fZcinV9ciakgzqGUc')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        alertToggle();
      } , (error) => {
        console.log(error.text);
      })
     
      

  }

  return (
    <div>
      <Alert className={`mg mt-2 width50 ${alert}`} color="info">
      <span className="font-medium mg text-center">Email sent succesfully!</span>
    </Alert>
        <ol className='icon_cont mg-t-2'>
          <li><a href="https://facebook.com"><TiSocialFacebook style={{color: 'gray' , }} size={32}></TiSocialFacebook></a></li>
          <li><a href="https://instagram.com"><TiSocialInstagram style={{color: 'gray' , }} size={32}></TiSocialInstagram></a></li>
          <li><a href="https://linkedin.com"><TiSocialLinkedin style={{color: 'gray' , }} size={32}></TiSocialLinkedin></a></li>
          <li><a href="https://pinterest.com"><TiSocialPinterest style={{color: 'gray' , }} size={32}></TiSocialPinterest></a></li>
          <li><a href="https://github.com/MustataAlexandru"><TiSocialGithub style={{color: 'gray' , }} size={32}></TiSocialGithub></a></li>
          <li><a href="https://twitter.com"><TiSocialTwitter style={{color: 'gray' , }} size={32}></TiSocialTwitter></a></li>
          <li><a href="https://dribbble.com"><TiSocialDribbble style={{color: 'gray' , }} size={32}></TiSocialDribbble></a></li>
          <li><a href="https://flickr.com"><TiSocialFlickr style={{color: 'gray' , }} size={32}></TiSocialFlickr></a></li>
          <li><a href="https://youtube.com"><TiSocialYoutube style={{color: 'gray' ,}} size={32}></TiSocialYoutube></a></li>
        </ol>
      
      <div className='custom-flex'>
      <form type="submit" ref={form} onSubmit={submitHandler} className="custom_form">

        <h1 className='text-center'><strong>Send us an email!</strong></h1>

      <div className="">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" name='email' type="email" rightIcon={HiMail} placeholder="example@mail.com" required />
    </div>
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" name='message' placeholder="Send us a message!" required rows={12} />
    </div>
    <Button type="submit" className='width100 mt-4'>Submit</Button>
    </form>
    <Card className="max-w-sm media-0-a box-shadow" imgSrc={require('./neymar22.jpg')} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Welcome to Universitatea Craiova - A Beacon of Knowledge and Innovation in the Heart of Oltenia!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {textData}
      </p>
    </Card>
  
    </div>
      <Foter />
    </div>
  )
}
