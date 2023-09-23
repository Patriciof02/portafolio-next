'use client'


import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"
import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedImage } from '@/components/AnimatedImage'



export default function Home() {
  return (
    <>
    <div className=' w-full h-full p-32 '>
    <main className='flex  items-center justify-between w-full gap-4'>

    <AnimatedImage src="https://res.cloudinary.com/dfa2pjwt4/image/upload/v1695485140/sketchme_qnjxjk.jpg" alt="imagen jumbotron" width={500} height={500} className='flex rounded'/>

      
      <div className='w-1/2'>
          <AnimatedText className="" text={"Mejorando experiencias con codigo"}/>
          <p className='my-4 font-medium text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nisi a, quo eaque ipsum aliquam, ducimus vitae veritatis odit minima perferendis. Aliquam et non tempore repellendus error nisi quidem sequi?</p>
          <Link href="/assets/docs/cv.pdf" className='flex items-center justify-center bg-slate-900 text-slate-100 p2 rounded-lg text.lg hover:bg-slate-100 hover:text-slate-900 ' target={"_blank"} download={true} >Curriculum</Link>
          </div>

    </main>
  </div>
  </>
  )
}
