import React from 'react'
import Foter from './Footer'
import { Button, Label, TextInput , Textarea} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Card } from "flowbite-react";
import {TiSocialFacebook , TiSocialInstagram , TiSocialLinkedin , TiSocialPinterest , TiSocialTwitter , TiSocialGithub , TiSocialDribbble , TiSocialFlickr ,TiSocialYoutube} from 'react-icons/ti'

const textData = "At Universitatea Craiova, we are proud to stand as one of Romania's premier institutions of higher education, known for our commitment to excellence, innovation, and the development of young minds. Established in 1947, our university has grown to embody the spirit of education and research, fostering an environment where academic potentials are realized, and futures are shaped."

export default function Contact() {

  const submitHandler = () => {

  }

  return (
    <div>
      <h1 className='text-center mb-4 mt-4'><strong>Contact</strong></h1>
      
        <ol className='icon_cont'>
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
      <form type="submit" onSubmit={submitHandler} className="custom_form">
        <h1 className='text-center'><strong>Send us an email!</strong></h1>
      <div className="">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="example@mail.com" required />
    </div>
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Send us a message!" required rows={12} />
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
