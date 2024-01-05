import ProfilePic from '../../assets/profile-pic.png'

import { Navbar } from 'flowbite-react'
const Navigation = () => {
  const menu = [
    {
      name: 'Sobre Mí',
      url: '#sobre-mi'
    },
    {
      name: 'Skills',
      url: '#skills'
    },

    {
      name: 'Proyectos',
      url: '#proyectos'
    },
    {
      name: 'Formación',
      url: '#'
    },
    {
      name: 'Cursos',
      url: '#'
    },
    {
      name: 'Contacto',
      url: '#'
    }
  ]

  return (
    <Navbar
      fluid
      rounded
      className='bg-[#14071c] py-4 mx-auto max-w-screen-xl fixed top-0 left-0 right-0'>
      <Navbar.Brand>
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
