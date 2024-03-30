import { Card } from 'flowbite-react'
import { motion } from 'framer-motion'
import { projects } from '../../utils/projects'


const Proyectos = () => {

  return (
    <section
      id='proyectos'
      className='flex flex-col items-center gap-10 py-24 px-10 mx-auto lg:w-2/3 lg:px-22 mt-14 mb-44'>
      <h1 className='text-5xl font-bold text-white'>Proyectos</h1>
      <div className='grid xl:grid-cols-2 gap-5 justify-center items-center'>
        {projects.map((project, index) => (
          <Card
            key={index}
            className='max-w-sm bg-indigo-800 border-none shadow-rose-300 shadow-md duration-500 hover:shadow-xl transition-shadow'
            renderImage={() => (
              <img
                src={project.img}
                alt={project.title}
                className='size-full object-cover rounded-t-lg'
              />
            )}>
            <h5 className='text-2xl font-bold tracking-tight text-orange-400/95 '>
              {project.title}
            </h5>
            <p className='font-normal text-white '>{project.description}</p>
            <div className='flex gap-3'>
              <motion.a
                href={project.url}
                whileHover={{ scale: 0.95, boxShadow: '0 0 10px #fff' }}
                className='text-white border border-white/10 rounded-md px-4 py-3 flex items-center justify-center bg-purple-600'
                target='_blank'
                rel='noreferrer'>
                Demo
              </motion.a>
              <motion.a
                href={project.repo}
                whileHover={{ scale: 0.95, boxShadow: '0 0 10px #fda4af' }}
                className='text-purple-500 border border-purple-600 rounded-md px-4 py-3 flex items-center justify-center bg-white '
                target='_blank'
                rel='noreferrer'>
                Repositorio
              </motion.a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Proyectos
