import React from 'react'
import Container from '../Container'
import Linkedin from '@/components/Icons/Linkedin'
import Github from '@/components/Icons/Github'

function Footer() {
  return (
    <Container>
      <div className="bg-white border rounded-lg w-full h-1 mb-3 mt-6 md:mt-12"></div>
      <footer className="mb-5 flex items-center justify-between flex-col md:flex-row">
        <h4 className="text-xs md:text-base text-text font-bold">
          AlexRicc2
        </h4>
        <div className="flex items-center gap-x-4">
          <a href='' className="w-6 social-svg lighter">
            <Linkedin className="fill-white"/>
          </a>
          <a href="" className="w-6 social-svg lighter">
            <Github className="fill-white"/>
          </a>
        </div>
      </footer>
    </Container>
  )
}

export default Footer