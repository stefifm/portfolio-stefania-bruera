import DesarrolloPersonal from '../../assets/desarrollo-personal.png'
import BusinessAgility from '../../assets/business-agility.png'
import Emprendimiento from '../../assets/emprendimiento.png'
import SqlMysql from '../../assets/sql-con-mysql.png'
import MysqlServer from '../../assets/sql-con-mysql-server-oracle.png'
import PythonIntro from '../../assets/Python-Data-Science-Introduccion-Lenguaje.png'
import PythonFunciones from '../../assets/Python-Data-Science-Funciones-Librerias-Pandas-básico.png'
import PythonPandas from '../../assets/Python-Pandas-Tratamiento-analisis-datos.png'
import DataVisual from '../../assets/Data-Visualization-Explorando-Seaborn.png'
import Machine1 from '../../assets/Machine-Learning-clasificacion-SKLearn.png'
import Machine2 from '../../assets/Machine-Learning-Optimizacion-modelos-hiperparametros.png'
import IntroAnalisis from '../../assets/intro-analisis-datos.png'
import English from '../../assets/certificado-ingles.png'
import { Carousel } from 'flowbite-react'
const Cursos = () => {
  const certificados = [
    {
      img: DesarrolloPersonal
    },
    {
      img: BusinessAgility
    },
    {
      img: Emprendimiento
    },
    {
      img: SqlMysql
    },
    {
      img: MysqlServer
    },
    {
      img: PythonIntro
    },
    {
      img: PythonFunciones
    },
    {
      img: PythonPandas
    },
    {
      img: DataVisual
    },
    {
      img: Machine1
    },
    {
      img: Machine2
    },
    {
      img: IntroAnalisis
    },
    {
      img: English
    }
  ]
  return (
    <section
      id='cursos'
      className='flex flex-col items-center gap-10 py-24 px-2 md:px-10 mx-auto lg:w-10/12 xl:w-2/3 xl:px-22 mt-14 mb-44'>
      <h1 className='text-5xl font-bold text-white'>Cursos</h1>
      <div className='w-full h-64 md:h-[30rem] lg:h-[32rem] xl:h-[37rem] 2xl:h-[50rem]'>
        <Carousel
          slideInterval={5000}
          leftControl='<'
          rightControl='>'
          className='text-black text-5xl font-bold'
          indicators={false}>
          {certificados.map((certificado, index) => (
            <img
              src={certificado.img}
              alt='Certificado'
              key={index}
              className='w-full h-full object-cover'
            />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Cursos
