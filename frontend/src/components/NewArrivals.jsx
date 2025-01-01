import React, { useEffect, useState } from 'react'
import Title from './Title'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { products } from '../assets/data';


const NewArrivals = () => {


  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    const data = products.slice(0, 10)
  })

  


  return (
    <section>
      <Title />
      {/* Swiper container  */}
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
              spaceBetween: 30,
          }}
        }
        modules={[Autoplay, Pagination]}
        className="h-[555px]"
      >
        {NewArrivals}
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default NewArrivals
