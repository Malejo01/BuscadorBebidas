import {Container, Image} from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import Footer from './components/Footer'
import styles from './styles/App.css'


function App() {
  

  return (
    <CategoriasProvider>
      <BebidasProvider>
    <div>
      <header className="pt-3 pb-1">
        <Image src='https://pbs.twimg.com/media/DpOJ-L0XgAA1_KP?format=jpg&name=small' className='Imagen-Logo'/>
        <h1>El ebrio fino</h1>
        <p className='subtitulo'>Armate el trago que quieras en unos clicks</p>
      </header>

      <> 

        <Formulario />
        <ListadoBebidas/>

        <ModalBebida/>
      </>
      <Footer/>
    </div>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
