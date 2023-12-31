import { MdOutlineMailLock } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import ProfilePic from '../../assets/profile-pic.png'

const BannerComponent = () => {
  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/stefifm',
      icon: <FaGithub className='w-5 h-5' />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/stefania-bruera',
      icon: <FaLinkedin className='w-5 h-5' />
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com/stefifm',
      icon: <FaTwitter className='w-5 h-5' />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/stefifm',
      icon: <AiOutlineInstagram className='w-5 h-5' />
    },
    {
      name: 'Email',
      url: 'mailto:@bruerastefania@gmail.com',
      icon: <MdOutlineMailLock className='w-5 h-5' />
    }
  ]

  return (
    <section className='mt-56'>
      <div className='flex gap-4 py-33 justify-center items-center mx-auto w-2/3 px-28'>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-5xl py-4 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
            Hola, mi nombre es Stefania Bruera!! Soy Programador Junior y Periodista Deportivo
          </h1>
          <p className='text-white text-xl'>
            Soy Periodista Deportivo egresada del Instituto Superior Mariano Moreno y Programador
            Junior del programa Oracle Next Education de Alura Latam. Actualmente estudio Ingeniería
            en Sistemas en la Universidad Tecnológica Nacional Facultad Regional de Córdoba,
            Argentina.
          </p>

          <nav className='flex flex-wrap gap-2 mt-2 '>
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target='_blank'
                className='text-white border border-white/10 rounded-full px-4 py-3 flex gap-2 items-center justify-center bg-purple-500 hover:bg-purple-600 transition-colors'
                rel='noreferrer'>
                {item.icon}
                <span className='text-white'>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <img
          src={ProfilePic}
          alt=''
          className='w-80 h-80 '
        />
      </div>
    </section>
  )
}

export default BannerComponent
