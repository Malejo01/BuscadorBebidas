import React from 'react'
import moe from '../assets/moe.png'

function Footer() {
    return (
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <div className='col-12 col-md-3 d-flex align-items-center justify-content-center'> 
                        <img src={moe} className='mx-2' width={'250'}/>
                        </div>
                    </nav>

                </div>
            </footer>
        </div>
    )
}

export default Footer
