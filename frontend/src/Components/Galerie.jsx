import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Foter from './Footer';


export default function Galerie ()   {
  return (
    <div>
    <h1>Galerie</h1>
    <div className='container-50'>
      <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="logo192.png" alt="poza craiova"></img></SwiperSlide>
      <SwiperSlide><img src="logo192.png" alt="poza craiova"></img></SwiperSlide>
      <SwiperSlide><img src="logo192.png" alt="poza craiova"></img></SwiperSlide>
      <SwiperSlide><img src="logo192.png" alt="poza craiova"></img></SwiperSlide>
    </Swiper>
    </div>
    <Foter />
    </div>
  );
};
 