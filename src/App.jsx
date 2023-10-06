import {Container, Image} from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import styles from './styles/App.css'
function App() {
  

  return (
    <CategoriasProvider>
      <BebidasProvider>
    <div>
      <header className="py-3">
        <Image src='https://pbs.twimg.com/media/DpOJ-L0XgAA1_KP?format=jpg&name=small' className='Imagen-Logo'/>
        <h1>El ebrio fino</h1>
        <p className='subtitulo'>Armate el trago que quieras con dos clicks</p>
      </header>

      <Container className='mt-5' style={{}}> 

        <Formulario/>
        <ListadoBebidas/>

        <ModalBebida/>
      </Container>
    </div>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
