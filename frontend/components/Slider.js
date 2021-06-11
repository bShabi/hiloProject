import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import style from '@/styles/Slider.module.css'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function Slider({ title }) {
  return (
    <>
      <h2 className={style.title}>Today's Top Tips & Hacks |</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={57}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 57,
          },
        }}
        pagination={false}
        navigation={true}
        className={style.swiperSlide}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            
          />
        <div className={style.container}>
        <h2>Ben Levi</h2>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
      
       
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Slide 2"
          />
         <div className={style.container}>
          <h2>Ben Levi</h2>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Slide 3"
          />
             <div className={style.container}>
          <h2>Ben Levi</h2>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Slide 4"
          />
             <div className={style.container}>
          <h2>Ben Levi</h2>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Slide 5"
          />
             <div className={style.container}>
          <h2>Ben Levi</h2>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="Slide 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="Slide 7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Slide 8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="Slide 10"
          />
        </SwiperSlide>
      </Swiper>


    </>
  )
}
