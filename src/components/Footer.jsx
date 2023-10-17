import React from 'react'
import moe from '../assets/moe.png'

function Footer() {
    return (
        <div>
            <footer className='text-white py-3 bg-dark'>
                <div className='container'>
                    <div className='row'>
                            <div className='col-12 col-md-3 d-flex align-items-center justify-content-center'> 
                                <img src={moe} className='mx-2' height='175'/>
                            </div>
                        
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold mb-2 text-center'>El Ebrio Fino</li>
                                <li className='text-center'>Ingresa el ingrediente que quieras en tu trago, selecciona que tipo de trago queres y ¡Listo!</li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold mb-2 text-center'>Otros Proyectos</li>
                                <li className='mb-3'>
                                    <a className='text-reset text-center' href='https://agendatucita-veterinaria-react-vite.netlify.app' target='_blank'>Agenda para Veterinaria</a>
                                </li>
                                <li className='mb-3'>
                                <a className='text-reset text-center' href='https://cotizador-crypto-react-vite.netlify.app' target='_blank'>Cotizador de Criptomonedas</a>
                                </li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold mb-2 text-center'>Mis redes</li>
                                <li className='text-center'>Ingresa el ingrediente que quieras en tu trago, selecciona que tipo de trago queres y ¡Listo!</li>
                            </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
