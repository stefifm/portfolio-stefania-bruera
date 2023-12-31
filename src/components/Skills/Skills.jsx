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
    { name: 'Jest', icon: SiJest }
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
      className='flex flex-col items-center gap-10 py-33 mx-auto w-2/3 px-28 mt-52 text-white'>
      <h1 className='text-5xl font-bold'>Skills</h1>
      <div className='flex justify-between gap-x-72 mx-auto'>
        <div className='w-1/2 flex flex-col gap-4'>
          <h2 className='text-3xl font-semibold'>Tecnologías</h2>
          <ul className='flex flex-col gap-3'>
            {tecnologias.map((tecno, index) => (
              <li
                key={index}
                className='flex items-center gap-4'>
                <tecno.icon className='size-7' />
                <p className='text-lg'>{tecno.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <h2 className='text-3xl font-semibold'>Soft Skills</h2>
          <ul className='flex flex-col gap-3'>
            {softSkills.map((soft, index) => (
              <li
                key={index}
                className='flex items-center gap-4'>
                <soft.icon className='size-7' />
                <p className='text-lg'>{soft.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
