import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Foter from './Footer';


export default function Galerie ()   {
  return (
    <div>
    <h1 className='text-center mt-4 mb-4'><strong>Gallery</strong></h1>
    <div className='container-50'>
      <Swiper
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={require ('./imgs/jucatori2.jpeg')} alt="poza craiova" className='gallery-img'></img></SwiperSlide>
      <SwiperSlide><img src={require ('./imgs/jucatori1.jpg')}className='gallery-img'></img></SwiperSlide>
      <SwiperSlide><img src={require ('./neymar22.jpg')} alt="poza craiova" className='gallery-img'></img></SwiperSlide>
      <SwiperSlide><img src="logo192.png" alt="poza craiova" className='gallery-img'></img></SwiperSlide>
    </Swiper>
    </div>
    <Foter />
    </div>
  );
};
 