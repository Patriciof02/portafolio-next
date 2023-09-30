'use client'

import React from 'react'
import Link from 'next/link'
import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedImage } from '@/components/AnimatedImage'



export default function Home() {
  return (
    <>
    <div className=' w-full h-full pt-32 px-20  md:p-32 flex justify-center'>
    <main className=' flex-column md:flex items-center md:justify-between justify-center h-full w-full gap-4'>

    <AnimatedImage src='https://res.cloudinary.com/dfa2pjwt4/image/upload/v1695485140/sketchme_qnjxjk.jpg' alt='imagen jumbotron' width={500} height={500} className='flex rounded'/>

      
      <div className='md:w-1/2 p-10'>
          <AnimatedText text={'Mejorando experiencias con código'}/>
          <p className='my-4 font-medium text-base text-center'>Mi viaje en el mundo del desarrollo web es una búsqueda constante de inspiración. Cada proyecto es una oportunidad para fusionar creatividad y tecnología, dando vida a experiencias digitales impactantes. Explora mi portafolio y únete a este viaje de innovación y diseño.</p>
          <Link href="/assets/docs/cv.pdf" className='flex items-center justify-center bg-slate-900 text-slate-100 p2 rounded-lg text.lg hover:bg-slate-100 hover:text-slate-900 ' target={'_blank'} download={true} >Curriculum</Link>
          </div>

    </main>
  </div>
  </>
  )
}
