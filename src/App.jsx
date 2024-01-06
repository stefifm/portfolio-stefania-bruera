import './App.css'
import BannerComponent from './components/BannerComponent/BannerComponent'
import Contacto from './components/Contacto/Contacto'
import Cursos from './components/Cursos/Cursos'
import Formacion from './components/Formacion/Formacion'
import Navigation from './components/Navigation/Navigation'
import Proyectos from './components/Proyectos/Proyectos'
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
        <Proyectos />
        {/* Section 5: Formación */}
        <Formacion />
        {/* Section 6: Cursos */}
        <Cursos />
      </main>
      {/* Footer */}
      {/* Dentro del Footer: Contacto */}
      <Contacto />
    </>
  )
}

export default App
