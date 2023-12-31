import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGit,
  FaBootstrap,
  FaPython,
  FaComments,
  FaBriefcase,
  FaBusinessTime,
  FaCalendarCheck
} from 'react-icons/fa'
import { IoLogoJavascript, IoShuffle } from 'react-icons/io5'
import { DiSqllite, DiMysql } from 'react-icons/di'
import {
  SiMicrosoftsqlserver,
  SiMongodb,
  SiSequelize,
  SiJest,
  SiStyledcomponents,
  SiMui
} from 'react-icons/si'
import { GiStrong, GiTeamIdea } from 'react-icons/gi'
import { PiStudent } from 'react-icons/pi'
import { FaPersonDigging, FaPersonThroughWindow, FaUnlockKeyhole } from 'react-icons/fa6'
import { LuBraces } from 'react-icons/lu'
import { AiOutlineFunction } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Skills = () => {
  const tecnologias = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3 },
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'Python', icon: FaPython },
    { name: 'React', icon: FaReact },
    { name: 'MySQL', icon: DiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'NodeJS', icon: FaNodeJs },
    { name: 'SQL Server', icon: SiMicrosoftsqlserver },
    { name: 'Git', icon: FaGit },
    { name: 'SQLite', icon: DiSqllite },
    { name: 'Sequelize', icon: SiSequelize },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Material UI', icon: SiMui },
    { name: 'Styled Components', icon: SiStyledcomponents },
    { name: 'Jest', icon: SiJest },
    { name: 'POO', icon: LuBraces },
    { name: 'Prog. Funcional', icon: AiOutlineFunction }
  ]

  const softSkills = [
    { name: 'Trabajo en equipo', icon: GiTeamIdea },
    { name: 'Comunicación', icon: FaComments },
    { name: 'Autodidacta', icon: PiStudent },
    { name: 'Proactiva', icon: FaPersonDigging },
    { name: 'Disciplina', icon: GiStrong },
    { name: 'Agilidad', icon: FaPersonThroughWindow },
    { name: 'Flexibilidad', icon: IoShuffle },
    { name: 'Ética de Trabajo', icon: FaBriefcase },
    { name: 'Capacidad de resolución de problemas', icon: FaUnlockKeyhole },
    { name: 'Gestión de la Organización', icon: FaBusinessTime },
    { name: 'Gestión del Tiempo', icon: FaCalendarCheck }
  ]
  return (
    <section
      id='skills'
      className='flex flex-col items-center gap-10 py-24 px-10 mx-auto lg:w-2/3 lg:px-22 mt-14 mb-44 text-white'>
      <h1 className='text-5xl font-bold'>Skills</h1>
      <div className='flex flex-col gap-y-10 xl:flex-row xl:justify-between lg:gap-x-52'>
        <div className=' flex flex-col gap-4 basis-1/2'>
          <h2 className='text-3xl font-semibold text-center '>Tecnologías</h2>
          <ul className='grid md:grid-cols-2 gap-2 lg:gap-6 justify-center'>
            {tecnologias.map((tecno, index) => (
              <motion.li
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ threshold: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                key={index}
                className='flex items-center  gap-2 rounded-md p-2 border border-white/10 bg-violet-700 '>
                <tecno.icon className='size-6' />
                <p className='text-sm lg:text-base'>{tecno.name}</p>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className=' flex flex-col gap-4 basis-1/2'>
          <h2 className='text-3xl font-semibold text-center'>Soft Skills</h2>
          <ul className='grid md:grid-cols-2 gap-2 lg:gap-6 justify-center'>
            {softSkills.map((soft, index) => (
              <motion.li
                key={index}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ threshold: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='flex items-center gap-2 rounded-md p-2 border border-white/10 bg-violet-700'>
                <soft.icon className='size-6' />
                <span className='text-sm lg:text-base lg:leading-5 '>{soft.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
