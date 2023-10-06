import {Col, Card, Button, CardBody, CardTitle} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


const Bebida = ({bebida}) => {

    const {handleModalClick, handleBebidaIdClick} = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img 
                    variant='top' 
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />
                <Card.Body>
                    <CardTitle style={{textOverflow:'clip'}}>{bebida.strDrink}</CardTitle>
                    <Button 
                        variant='warning' 
                        className='w-100 text-uppercase mt-2'
                        onClick={ () => {
                            handleModalClick()
                            handleBebidaIdClick(bebida.idDrink)
                        }}
                        >
                        Ver receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida