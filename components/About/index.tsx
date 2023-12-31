import React from 'react'
import Container from '../layout/Container'
import Image from 'next/image'
import Github from '../Icons/Github'
import s from '../Icons/icon.module.css'
import Gmail from '../Icons/Gmail'
import Linkedin from '../Icons/Linkedin'
function About() {
  return (
    <section className='py-6 md:py-12'>
      <Container className='flex flex-col md:flex-row'>
        <div className='mb-6 md:w-1/2 md:mb-0'>
          <div className='w-2/3 m-auto md:m-0'>

            <div className='relative mb-4 aspect-square rounded-2xl overflow-hidden'>
              <Image src="/alex.webp" alt="alex" fill className='object-cover' priority sizes='(max-width: 768px) 80vw, 50vw' />
            </div>
            <h3 className='text-2xl text-center mb-2 font-semibold'>Alex Sant&apos;Anna</h3>
            <div className='flex justify-center gap-2'>
              <a href="#">
                <Github className={s.icon_big} />
              </a>
              <a>
                <Gmail className={s.icon_big} />
              </a>
              <a href="">
                <Linkedin className={s.icon_big} />
              </a>

            </div>
          </div>
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-center text-3xl md:text-5xl mb-4 md:text-left font-bold'>About</h2>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, eros in condimentum suscipit, leo lorem maximus felis, id ultricies ligula urna vel nisi. Vestibulum est ante, malesuada feugiat tellus nec, aliquam sollicitudin orci. Donec congue sed mauris id sodales. Maecenas a purus sed erat sagittis efficitur eu finibus ligula. Nullam scelerisque lacinia tellus, vel dapibus nulla imperdiet ac. Nulpit eget, ultricies id urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='py-2'>Aenean consequat massa et ipsum malesuada, quis semper sapien vestibulum. Suspendisse euismod eget diam eu hendrerit. Sed vulputate mauris ut semper lacinia. Praesent commodo tincidunt metus id viverra. Donec ut nulla fermentum, lobortis justo vitae, volutpat orci. Mauris in molestie purus, eget pulvinar quam. Morbi efficitur placerat neque, interdum fringilla arcu dapibus eu. Nam ut sem mauris. Ut ultricies egestas urna a ultricies. Donec id lorem ultricies mi iaculis pla</p>
        </div>
      </Container>
    </section>
  )
}

export default About