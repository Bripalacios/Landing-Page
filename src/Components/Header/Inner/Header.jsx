import { Button } from '@mantine/core'
import './styles.css'

export const Header = () => {
  return (
    <>
      
      <div className='ConfiguracionElementos'>
      <h1 className='title'>TREELABX</h1>
        <p className='Subtitle'>IT Consulting & Solutions</p>
        <p className='description'> <b>Web Development and Native Applications</b> </p>

        <h2 className='invitation'>Unete a nuestra comunidad de ayuda, soporte en desarrollo web, tanto en lìnea y como en vivo. Lo mas grande de Mexico y Latinoamerica.</h2>

    <Button className='contact' variant="outline" color="gray" radius="xs" size="lg">
      CONTACTANOS
    </Button>



        

      </div>
    </>
  )
}
