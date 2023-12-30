'use client';

import React from 'react'
import Container from '../layout/Container'
import Typewriter from "typewriter-effect";
import HeroImage from './HeroImage';
import Download from '../Icons/Download';
import s from '../Icons/icon.module.css'
function Hero() {
  const typeWriterTexts = ['I can develop your E-commerce', 'We can develop your brand ideas']
  return (
    <Container className='pb-6 md:pb-12'>
      <section className='mt-2 md:h-[calc(90vh-90px)] max-h-[800px] bg-slate-200 flex md:items-center flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <h2 className='text-4xl md:text-6xl leading-none mb-4 font-bold'>Hi I&apos;m Alex, a Web developer.</h2>
          <div className='h-4 mb-6'>
            <Typewriter
              options={{
                strings: typeWriterTexts,
                autoStart: true,
                loop: true,
                delay: 30,
                cursor: "|",
                deleteSpeed: 30,
              }}
            />
          </div>
          <button className='flex items-center gap-2 border rounded-lg p-3'>
            <span>Resume</span>
            <Download className={s.icon}/>
          </button>
        </div>

        <div className='md:w-1/2 hidden md:block'>
          <HeroImage />
        </div>
      </section>
    </Container>
  )
}

export default Hero