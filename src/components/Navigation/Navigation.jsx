import ProfilePic from '../../assets/profile-pic.png'

import { Navbar } from 'flowbite-react'
const Navigation = () => {
  const menu = [
    {
      name: 'Sobre Mi',
      url: '#sobre-mi'
    },
    {
      name: 'Proyectos',
      url: '#proyectos'
    },
    {
      name: 'Skills',
      url: '#skills'
    },

    {
      name: 'Formación',
      url: '#formacion'
    },
    {
      name: 'Cursos',
      url: '#cursos'
    },
    {
      name: 'Contacto',
      url: '#contacto'
    }
  ]

  return (
    <Navbar
      fluid
      rounded
      className='bg-[#250f32] py-4 mx-auto max-w-screen-xl fixed top-0 left-0 right-0 z-20'>
      <Navbar.Brand href='#'>
        <img
          src={ProfilePic}
          className='mr-3 h-6 sm:h-9'
          alt='Stefania Bruera Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
          Stefania Bruera
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {menu.map((item, index) => (
          <Navbar.Link
            href={item.url}
            key={index}
            className='text-white hover:bg-slate-800/90 hover:text-purple-400 lg:hover:text-purple-400 text-base'>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
