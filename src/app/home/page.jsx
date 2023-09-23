'use client'

//rafce
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import { AnimatedText } from '@/components/AnimatedText'
const desdeIzquierda = {
    initial:{
        opacity:0,
        x:-50,
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:2,
        }
    }
}

const page = () => {
  return (
    <div className='w-full h-full p-32'>
      <main className='flex items-center justify-between w-full gap-4'>
        <motion.div initial="initial" animate="animate" variants={desdeIzquierda} className='w-1/2'>
            <Image className="rounded-2xl " src="/programador.png" alt="imagen jumbotron" width={500} height={500}/>

        </motion.div>
        <div className='w-1/2'>
            <AnimatedText text={"Mejorando experiencias con codigo"}/>
            <p className='my-4 font-medium text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nisi a, quo eaque ipsum aliquam, ducimus vitae veritatis odit minima perferendis. Aliquam et non tempore repellendus error nisi quidem sequi?</p>
            <Link href="/assets/docs/cv.pdf" className='flex items-center justify-center bg-slate-900 text-slate-100 p2 rounded-lg text.lg hover:bg-slate-100 hover:text-slate-900 ' target={"_blank"} download={true} >Curriculum</Link>
            </div>

      </main>
    </div>
  )
}

export default page
