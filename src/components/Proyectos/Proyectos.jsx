import { Card } from 'flowbite-react'
import Encriptador from '../../assets/encriptador-react.png'
import RestF1 from '../../assets/REST-API-F1.png'
import Motorflix from '../../assets/motorflix.png'
import Farma from '../../assets/FARMASALUD3 E-COMMERCE.png'

const Proyectos = () => {
  const projects = [
    {
      title: 'Encriptador Web React',
      description: 'La versión React del primer proyecto de alura "encriptador web"',
      img: Encriptador,
      url: 'https://encriptador-react.vercel.app/',
      repo: 'https://github.com/stefifm/encriptador-react'
    },
    {
      title: 'Rest API F1',
      description:
        'Proyecto de la materia Desarrollo de Software de la UTN FRC sobre una REST API de F1',
      img: RestF1,
      url: 'https://rest-f1-api-stefifm.vercel.app/',
      repo: 'https://github.com/stefifm/rest-f1-api-frontend'
    },
    {
      title: 'MotorFlix',
      description: 'Un CRUD basado en NetFlix pero con vídeos sobre deporte motor. Challenge Alura',
      img: Motorflix,
      url: 'https://motorflix-stefifm.vercel.app/',
      repo: 'https://github.com/stefifm/motorflix'
    },
    {
      title: 'FARMASALUD3 E-Commerce',
      description: 'CRUD de un e-commerce de farmacia. Challenge Alura',
      img: Farma,
      url: 'https://ecommerce-farmasalud3.vercel.app/',
      repo: 'https://github.com/stefifm/desafio-ecommerce-alura'
    }
  ]
  return (
    <section
      id='proyectos'
      className='flex flex-col items-center gap-10 py-24 px-10 mx-auto lg:w-2/3 lg:px-22 mt-14 mb-44'>
      <h1 className='text-5xl font-bold text-white'>Proyectos</h1>
      <div className='grid xl:grid-cols-2 gap-5 justify-center items-center'>
        {projects.map((project, index) => (
          <Card
            className='max-w-sm bg-indigo-800 border-none shadow-md shadow-emerald-700'
            key={index}
            renderImage={() => (
              <img
                src={project.img}
                alt={project.title}
                className='size-full object-cover rounded-t-lg'
              />
            )}>
            <h5 className='text-2xl font-bold tracking-tight text-white '>{project.title}</h5>
            <p className='font-normal text-white '>{project.description}</p>
            <div className='flex gap-3'>
              <a
                href={project.url}
                className='text-white border border-white/10 rounded-md px-4 py-3 flex items-center justify-center bg-purple-500 hover:bg-white hover:text-purple-500 transition-colors'
                target='_blank'
                rel='noreferrer'>
                Demo
              </a>
              <a
                href={project.repo}
                className='text-purple-500 border border-white/10 rounded-md px-4 py-3 flex items-center justify-center bg-white hover:bg-purple-600 hover:text-white transition-colors'
                target='_blank'
                rel='noreferrer'>
                Repositorio
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
