import { Timeline } from 'flowbite-react'
import { HiCalendar } from 'react-icons/hi'

const Formacion = () => {
  const academicas = [
    {
      date: 'Marzo 2020 - Actualidad',
      title: 'Ingeniería en Sistemas de la Información',
      place: 'Universidad Tecnológica Nacional - Facultad Regional Córdoba'
    },
    {
      date: 'Diciembre 2022 - Junio 2023',
      title: 'Programador Junior',
      place: 'Alura Latam'
    },
    {
      date: 'Marzo 2013 - Diciembre 2016',
      title: 'Periodista Deportivo',
      place: 'Instituto Superior Mariano Moreno'
    }
  ]
  return (
    <section
      id='formacion'
      className='flex flex-col items-center gap-10 py-24 px-10 mx-auto lg:w-2/3 lg:px-22 mt-14 mb-44'>
      <h1 className='text-5xl font-bold text-white'>Formación</h1>
      <Timeline>
        {academicas.map((academica, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content className='flex flex-col gap-4'>
              <Timeline.Time className='text-orange-100/95 mt-1 ml-1'>
                {academica.date}
              </Timeline.Time>
              <Timeline.Title className='text-orange-500'>{academica.title}</Timeline.Title>
              <Timeline.Body className='text-orange-300/95 font-semibold'>
                <div className='flex gap-1 items-center'>
                  <HiCalendar />
                  {academica.place}
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  )
}

export default Formacion
