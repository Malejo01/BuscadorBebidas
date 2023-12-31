import {Modal, Image, Button} from 'react-bootstrap' 
import useBebidas from '../hooks/useBebidas'

const  ModalBebida = () =>{

    const { modal, handleModalClick, receta, cargando } = useBebidas()

    console.log(receta)

    const mostrarIngredientes = () => {
        let ingredientes = []

        for (let i =1; i<16 ;i++) {
            if(receta[`strIngredient${i}`]) {
                ingredientes.push( <li> {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>)
            }
        }
        return ingredientes
    }
    return (
        !cargando && (<Modal show={modal} onHide={handleModalClick}>
            
            <Image 
                src={receta.strDrinkThumb}
                alt={`Imagen de la receta de ${receta.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones:</h2>
                        {(receta.strInstructionsES) ? <p>{receta.strInstructionsES}</p> : <p>{receta.strInstructions}</p>}
                        <h2>Ingredientes y cantidades</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
                <div className="">
                    <Button variant='warning' 
                        className='w-100 text-uppercase mt-2 mb-4'
                        onClick={handleModalClick} 
                        >
                        Volver
                    </Button>
                </div>
        </Modal>
        )
    )
}

export default ModalBebida
