import { Button, Footer, Label, TextInput } from 'flowbite-react'
const Contacto = () => {
  return (
    <Footer
      container
      className='bg-[#351348]'>
      <div className='w-full text-center flex flex-col items-center justify-center'>
        <form className='flex max-w-md flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='email1'
                value='Your email'
              />
            </div>
            <TextInput
              id='email1'
              type='email'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                htmlFor='password1'
                value='Your password'
              />
            </div>
            <TextInput
              id='password1'
              type='password'
              required
            />
          </div>

          <Button type='submit'>Submit</Button>
        </form>

        <Footer.Divider />
        <Footer.Copyright
          href='#'
          by='Desarrollado por Stefania Bruera'
          year={2024}
        />
      </div>
    </Footer>
  )
}

export default Contacto
