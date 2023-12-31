'use client';
import React from 'react'
import Container from '../layout/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from '../ProjectCard';
import "swiper/css";
import 'swiper/css/navigation';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

function Projects() {
  return (
    <section className='py-6 md:py-12'>
      <Container className='md:!pr-0'>
        <h2 className='text-center text-3xl md:text-5xl mb-6 font-bold'>What I developed..</h2>
        <div className='py-6 px-[10rem] mx-[-10rem] my-[-1.5rem] overflow-hidden'>
      
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className=' !overflow-visible'
          breakpoints={{
            630: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
        >
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SlideNextButton slidesCount={4}/>
          <SlidePrevButton slidesCount={4}/>
        </Swiper>
          </div>

      </Container>
    </section>
  )
}

export default Projects