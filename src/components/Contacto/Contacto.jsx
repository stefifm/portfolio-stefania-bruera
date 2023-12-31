import { Button, FloatingLabel, Footer, Textarea } from 'flowbite-react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

const Contacto = () => {
  const schema = yup.object().shape({
    nombre: yup
      .string()
      .required('El campo Nombre es requerido')
      .min(3, 'Debe tener no menos de 3 caracteres')
      .max(50, 'No debe superar los 50 caracteres'),
    email: yup
      .string()
      .required('El campo Email es requerido')
      .email('Debe ser un email válido. Ejemplo: texto@texto.com'),
    asunto: yup
      .string()
      .required('El campo Asunto es requerido')
      .min(3, 'Debe tener no menos de 3 caracteres')
      .max(50, 'No debe superar los 50 caracteres'),
    mensaje: yup
      .string()
      .required('El campo Mensaje es requerido')
      .min(3, 'Debe tener no menos de 3 caracteres')
      .max(300, 'No debe superar los 300 caracteres')
  })

  const [serverState, sendToFormspree] = useFormspree('xayryzwj')

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })

  if (serverState.succeeded) {
    toast.success('Mensaje enviado correctamente. Me pondré en contacto rápidamente con usted.', {
      toastId: 'success1'
    })
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <Footer
      id='contacto'
      container
      className='bg-[#250f32]'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='grid lg:grid-cols-2 lg:gap-10 lg:items-center xl:w-2/3'>
          <div className='flex flex-col text-white px-4 py-5 justify-center'>
            <h1 className=' text-5xl font-bold mb-4'>Contacto</h1>
            <h2 className='font-semibold text-xl'>¿Quieres contactarme?</h2>
            <p className='text-wrap'>
              Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.
            </p>
          </div>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(sendToFormspree)}>
            <FloatingLabel
              variant='filled'
              label='Nombre'
              {...register('nombre')}
              helperText={
                <>
                  <span className='font-medium'>{errors.nombre?.message}</span>
                </>
              }
              color={errors.nombre?.message ? 'error' : 'success'}
            />
            <FloatingLabel
              variant='filled'
              label='Email'
              {...register('email')}
              helperText={
                <>
                  <span className='font-medium'>{errors.email?.message}</span>
                </>
              }
              color={errors.email?.message ? 'error' : 'success'}
            />
            <FloatingLabel
              variant='filled'
              label='Asunto'
              {...register('asunto')}
              helperText={
                <>
                  <span className='font-medium'>{errors.asunto?.message}</span>
                </>
              }
              color={errors.asunto?.message ? 'error' : 'success'}
            />
            <Textarea
              variant='filled'
              placeholder='Mensaje'
              className={errors.mensaje?.message && 'placeholder:text-red-600 ring-1 ring-red-600'}
              {...register('mensaje')}
              helperText={
                <>
                  <span className='text-red-600 font-medium'>{errors.mensaje?.message}</span>
                </>
              }
            />

            <Button
              type='submit'
              disabled={!isDirty || !isValid || serverState.submitting}>
              Enviar Mensaje
            </Button>
          </form>
        </div>

        <Footer.Divider />

        <Footer.Copyright
          href='#'
          by='Desarrollado por Stefania Bruera'
          year={2024}
          className='text-white'
        />
      </div>
    </Footer>
  )
}

export default Contacto
