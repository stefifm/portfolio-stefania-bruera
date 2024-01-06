import DesarrolloPersonal from '../../assets/desarrollo-personal.png'
import BusinessAgility from '../../assets/business-agility.png'
import Emprendimiento from '../../assets/emprendimiento.png'
import SqlMysql from '../../assets/sql-con-mysql.png'
import MysqlServer from '../../assets/sql-con-mysql-server-oracle.png'
import PythonIntro from '../../assets/Python para Data Science_ Introducción al Lenguaje.png'
import PythonFunciones from '../../assets/Curso Python para Data Science_ Funciones_Librerías_Pandas básico.png'
import PythonPandas from '../../assets/Curso Python Pandas_Tratamiento_análisis de datos.png'
import DataVisual from '../../assets/Curso Data Visualization_ Explorando_Seaborn.png'
import Machine1 from '../../assets/Curso Machine Learning_clasificación_SKLearn.png'
import Machine2 from '../../assets/Curso Machine Learning_Optimización de modelos a través de hiperparámetros.png'
import IntroAnalisis from '../../assets/intro-analisis-datos.png'
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
    }
  ]
  return (
    <section
      id='cursos'
      className='flex flex-col items-center gap-10 py-24 px-2 md:px-10 mx-auto lg:w-10/12 xl:w-2/3 xl:px-22 mt-14 mb-44'>
      <h1 className='text-5xl font-bold text-white'>Cursos</h1>
      <div className='w-full h-[15rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] 2xl:h-[50rem]'>
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
