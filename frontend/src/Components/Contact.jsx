import React from 'react'
import Foter from './Footer'
import { Button, Label, TextInput , Textarea} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Card } from "flowbite-react";


export default function Contact() {

  const submitHandler = () => {

  }

  return (
    <div>
      <h1 className='text-center mb-4 mt-4'><strong>Contact</strong></h1>
      <div className='custom-flex'>
      <form type="submit" onSubmit={submitHandler} className="custom_form">
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
      <Textarea id="comment" placeholder="Send us a message!" required rows={4} />
    </div>
    <Button type="submit" className='width100 mt-4'>Submit</Button>
    </form>
    <Card className="max-w-sm media-0-a" imgSrc="logo192.png" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Welcome to Universitatea Craiova - A Beacon of Knowledge and Innovation in the Heart of Oltenia!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      At Universitatea Craiova, we are proud to stand as one of Romania's premier institutions of higher education, known for our commitment to excellence, innovation, and the development of young minds. Established in 1947, our university has grown to embody the spirit of education and research, fostering an environment where academic potentials are realized, and futures are shaped.
      </p>
    </Card>
    </div>
      <Foter />
    </div>
  )
}
