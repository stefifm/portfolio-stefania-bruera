import './App.css'
import BannerComponent from './components/BannerComponent/BannerComponent'
import Hobbies from './components/Hobbies/Hobbies'
import Navigation from './components/Navigation/Navigation'
import Skills from './components/Skills/Skills'
import SobreMi from './components/SobreMi/SobreMi'

function App() {
  return (
    <>
      <Navigation />
      <main>
        {/* Section 1: Banner */}
        <BannerComponent />
        {/* Section 2: Sobre Mí */}
        <SobreMi />
        {/* Section 3: Skills */}
        <Skills />
        {/* Section 4: Proyectos */}
        {/* Section 5: Formación */}
        {/* Section 6: Hobbies */}
        <Hobbies />
      </main>
      {/* Footer */}
      {/* Dentro del Footer: Contacto */}
    </>
  )
}

export default App
