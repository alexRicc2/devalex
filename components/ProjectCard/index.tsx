import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ProjectCard() {
  return (
    <Link className='rounded-lg overflow-hidden block' href="/" style={{boxShadow: '5px 5px 20px rgba(0,0,0,.27)'}}>
      <div className='relative w-full aspect-[2]'>
        <Image src="/placeholder.jpg" alt="" fill className='object-cover'/>
      </div>
      <div className='p-4'>
        <div className='flex items-center gap-2 mb-2'>
        <span className='h-4 w-1 bg-primary'></span>
        <h3 className='text-lg'>My project</h3>
        </div>
        <p className='text-zinc-400 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, eros in condimentum suscipit, leo.</p>
        {/* these should be tags for projects in wp dashboard */}
        <div className='flex gap-2 text-zinc-400'>
        <span>React</span>
        <span>wordpress</span>
        </div>
        <div className='flex justify-between text-zinc-400'>
          <div>0 views</div>
          <div>Edited on 30/12/2023</div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard