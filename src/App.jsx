import './App.css'
import BannerComponent from './components/BannerComponent/BannerComponent'
import Navigation from './components/Navigation/Navigation'
import SobreMi from './components/SobreMi/SobreMi'

function App() {
  return (
    <div className='absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#70e_100%)]'>
      <Navigation />
      <main>
        {/* Section 1: Banner */}
        <BannerComponent />
        {/* Section 2: Sobre Mí */}
        <SobreMi />
        {/* Section 3: Skills */}
        {/* Section 4: Hobbies */}
        {/* Section 5: Proyectos */}
        {/* Section 6: Formación */}
      </main>
      {/* Footer */}
      {/* Dentro del Footer: Contacto */}
    </div>
  )
}

export default App
