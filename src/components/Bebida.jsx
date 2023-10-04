import {Col, Card, Button, CardBody, CardTitle} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


const Bebida = ({bebida}) => {

    const {handleModalClick} = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img 
                    variant='top' 
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />
                <Card.Body>
                    <CardTitle>{bebida.strDrink}</CardTitle>
                    <Button 
                        variant='warning' 
                        className='w-100 text-uppercase mt-2'
                        onClick={ () => {
                            handleModalClick()
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