import React from 'react'
import Container from '../layout/Container'

function Hero() {
  return (
    <Container>
      <section className='h-[calc(200vh-90px)] bg-slate-200 flex'>
        <div className='w-1/2'>
          <h2>Hi my name is Alex</h2>
        </div>
        <div className='w-1/2'></div>
      </section>
    </Container>
  )
}

export default Hero