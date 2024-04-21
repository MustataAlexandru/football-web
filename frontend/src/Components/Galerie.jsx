import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Foter from './Footer';
import {Card} from 'flowbite-react';
import {LazyLoadImage} from 'react-lazy-load-image-component'; 


export default function Galerie ()   {
 
  return (
    <div>
   
    <div className='container mg-t-2'>
      
      <Swiper className="animated_container"
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><LazyLoadImage  src={require ('./imgs/jucatori2.jpeg')} alt="poza craiova" className='gallery-img'loading='lazy'></LazyLoadImage></SwiperSlide>
      <SwiperSlide><LazyLoadImage  src={require ('./imgs/jucatori1.jpg')}className='gallery-img'></LazyLoadImage></SwiperSlide>
      <SwiperSlide><LazyLoadImage  src={require ('./imgs/jucatori3.jpeg')} alt="poza craiova" className='gallery-img'></LazyLoadImage></SwiperSlide>
      <SwiperSlide><LazyLoadImage  loading="lazy" src={require('./imgs/jucatori4.jpeg')} alt="poza craiova" className='gallery-img'></LazyLoadImage></SwiperSlide>
    </Swiper>
    <div className='mt-8 flex gap-4 media-col'>
    <Card className="max-w-sm media-0-a box-shadow animated_container" imgSrc={require('./imgs/craiova-castiga.jpeg')} horizontal>
      
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      That's how it is in Craiova! Universitatea wins the Romanian Cup after 120 minutes against Astra.
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      For the second time in the last three years, the Universitatea Craiova team has won the Romanian Cup. The team from Banie prevailed against Astra Giurgiu, with a score of 3-2 (1-1), after the end of the 90 minutes showed a 1-1 tie.
      </p>
    </Card>
    <Card className="max-w-sm media-0-a box-shadow" imgSrc={require('./imgs/craiova4.jpeg')} vertical>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Costel Gâlcă are soarta pecetluită la CSU Craiova: câştigă campionatul sau pleacă!
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Dacă nu va aduce titlul la Craiova, va trebui să plece. Contractul se va încheia, automat, în acel moment, fără să se mai activeze opţiunea de prelungire.
      </p>
    </Card>
    </div>
    
    </div>
    <Foter />
    </div>
  );
};
 