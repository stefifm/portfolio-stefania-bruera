const SobreMi = () => {
  return (
    <section
      id='sobre-mi'
      className='text-white flex flex-col gap-4 py-48 px-2 mx-auto lg:w-2/3 2xl:px-28 mt-32 mb-32'>
      <div className='bg-purple-100/10 rounded-xl py-10 px-6 flex flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Sobre Mí</h1>
        <article className='flex flex-col gap-1 text-wrap'>
          <p>
            Desde niña me había interesado la metorología pero me fui inclinando hacia el
            Automovilismo.
          </p>
          <p>
            {' '}
            Fue tal mi pasión por el Automovilismo que me inicié en la carrera de Ingeniería
            Mecánica en la Universidad Tecnológica Nacional de Córdoba (UTN) en 2010, pero abandoné
            a mediados de 2011.
          </p>
          <p>
            Después de evaluaciones, me decidí por la carrera de Periodismo Deportivo en el
            Instituto Superior Mariano Moreno en 2013 y me recibí en 2016.
          </p>
          <p>
            Si bien no tuve tanta suerte desde lo laboral, 2020 regresé a la UTN para estudiar
            Ingeniería en Sistemas y tres años más tarde encontré en Alura Latam para ser
            Programador Junior.
          </p>
        </article>
      </div>
    </section>
  )
}

export default SobreMi
