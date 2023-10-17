import {useState} from 'react'
import {Button, Form, Col, Row, Alert} from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'
import barney from '../assets/barneygomez.png'
import moe from '../assets/moe.png'


function Formulario() {
    const [busqueda,setBusqueda] = useState({
        nombre: '',
        categoria:''
    })

    const [alerta,setAlerta] = useState ('')
    const {categorias} = useCategorias()
    const {consultarBebida} = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebida(busqueda)
    }

    return (
        <Form
        onSubmit={handleSubmit}
        style={{ backgroundColor:'#ffc107', padding:'15px', margin:'0', border:'10px', borderColor:'black'}}
        >
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Row>
                <Col md={6} >
                    <Form.Group >
                        <Form.Label htmlFor='nombre'> Nombre Bebida</Form.Label>
                        <Form.Control 
                            id='nombre'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, Gin, Etc.'
                            name='nombre'
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='categoria'> Tipo de Bebida</Form.Label>
                        <Form.Select 
                            id='categoria' 
                            name='categoria'
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name] : e.target.value
                            })}>
                            <option>Selecciona la categoria</option>
                            {categorias.map( categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                
            </Row>
            <Row className='justify-content-center mt-3'>
                <Col className=''>
                    
                </Col>
                <Col md={3} className='d-flex align-items-center justify-content-center'>
                <img src={moe}   style={{width:'160px', borderRadius:'25%'}}/>
                </Col>
                
            </Row>
            <Row className='justify-content-end mt-3'>
                <Col className=''>
                    
                </Col>
                <Col md={3} style={{}}>
                    <Button variant='danger'className='text-uppercase w-100' type='submit'>
                        Buscar Bebidas
                    </Button>
                </Col>
                
            </Row>
        </Form>
    )
}

export default Formulario
