import ProfilePic from '../../assets/profile-pic.png'

import { Navbar } from 'flowbite-react'
const Navigation = () => {
  const menu = [
    {
      name: 'Sobre Mí',
      url: '#'
    },
    {
      name: 'Skills',
      url: '#'
    },
    {
      name: 'Hobbies',
      url: '#'
    },
    {
      name: 'Proyectos',
      url: '#'
    },
    {
      name: 'Formación',
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
      className='bg-black py-4 mx-auto max-w-screen-xl'>
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
