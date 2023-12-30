const SobreMi = () => {
  return (
    <section className='text-white flex flex-col gap-4 py-33 mx-auto w-2/3 px-28 mt-20'>
      <div className='bg-purple-100/10 rounded py-5 px-4 flex flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Sobre Mí</h1>
        <article className='flex flex-col gap-1'>
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
