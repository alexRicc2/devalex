'use client';

import React from 'react'
import Container from '../layout/Container'
import Typewriter from "typewriter-effect";
import HeroImage from './HeroImage';

function Hero() {
  const typeWriterTexts = ['I can develop your E-commerce', 'We can develop your brand ideas']
  return (
    <Container>
      <section className='mt-2 md:h-[calc(90vh-90px)] max-h-[800px] bg-slate-200 flex md:items-center flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <h2 className='text-3xl md:text-5xl leading-none mb-4'>Hi I&apos;m Alex, a Web developer</h2>
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
        <div className='md:w-1/2'>
          <HeroImage/>
        </div>
      </section>
    </Container>
  )
}

export default Hero