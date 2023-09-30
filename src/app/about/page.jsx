import { AnimatedText } from '@/components/AnimatedText'
import React from 'react'

const page = () => {
  return (
    <div className='  md:p-32  w-full h-full  ' >
      <AnimatedText className="pt-32 text-4xl mb-10" text={'Patricio Figueroa C.'}/>
      
     <p className='m-3 md:m-10 text-center '>Bienvenido a mi portafolio como desarrollador Stack MERN. Soy Patricio Figueroa, un apasionado desarrollador de software con experiencia en la creación de aplicaciones web modernas y escalables utilizando tecnologías de vanguardia. Mi enfoque principal se centra en la pila MERN, que incluye MongoDB para la base de datos, Express.js para el servidor, React para la interfaz de usuario y Node.js para la gestión del lado del servidor.
     </p>
     <p className='m-3 md:m-10 text-center'>En este portafolio, encontrarás ejemplos de mi trabajo, proyectos destacados y las tecnologías que domino. Estoy comprometido con la mejora continua y el aprendizaje constante para mantenerme actualizado con las últimas tendencias en el mundo del desarrollo web.
     </p> 
     <p className='m-3 md:m-10 text-center'>Si estás buscando un desarrollador Stack MERN dedicado y apasionado para tu próximo proyecto, estás en el lugar adecuado. ¡Explora mi portafolio y no dudes en ponerse en contacto conmigo para discutir cómo puedo ayudarte a alcanzar tus objetivos!
     </p>

     <a href='mailto:pato.figue@gmail.com?cc=, , &bcc=&subject=Confirmación cita &body=Estoy buscando un desarrollador web de tus características de ser posible programemos una cita para discutirlo.' target={'_blank'} className='mx-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-white bg-black rounded-lg hover:bg-grey focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-black-600 dark:hover:bg-blue-700 dark:focus:ring-white-800'>
            Email me
             <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/sv' fill='none' viewBox='0 0 14 10'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
            </svg>
        </a>
    </div>
  )
}

export default page
