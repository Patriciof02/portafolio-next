import { AnimatedText } from '@/components/AnimatedText'
import React from 'react'

const page = () => {
  return (
    <div className='  p-32  w-full h-full  ' >
      <AnimatedText className="text-4xl mb-10" text={'Patricio Figueroa C.'}/>
      
     <p className='m-10 text-center '>Bienvenido a mi portafolio como desarrollador Stack MERN. Soy Patricio Figueroa, un apasionado desarrollador de software con experiencia en la creación de aplicaciones web modernas y escalables utilizando tecnologías de vanguardia. Mi enfoque principal se centra en la pila MERN, que incluye MongoDB para la base de datos, Express.js para el servidor, React para la interfaz de usuario y Node.js para la gestión del lado del servidor.
     </p>
     <p className='m-10 text-center'>En este portafolio, encontrarás ejemplos de mi trabajo, proyectos destacados y las tecnologías que domino. Estoy comprometido con la mejora continua y el aprendizaje constante para mantenerme actualizado con las últimas tendencias en el mundo del desarrollo web.
     </p> 
     <p className='m-10 text-center'>Si estás buscando un desarrollador Stack MERN dedicado y apasionado para tu próximo proyecto, estás en el lugar adecuado. ¡Explora mi portafolio y no dudes en ponerse en contacto conmigo para discutir cómo puedo ayudarte a alcanzar tus objetivos!
     </p>
    </div>
  )
}

export default page
