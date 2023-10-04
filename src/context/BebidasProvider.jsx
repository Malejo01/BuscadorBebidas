import { useState, useEffect, createContext } from 'react';
import axios from 'axios'


const BebidasContext = createContext ()

const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] =useState([])
    const [modal, setModal] = useState(false)
    const [bebidaID, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})

    useEffect (() => {
        const obtenerReceta = async () => {
            if (!bebidaID) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaID}`

                const {data} = await axios(url)
                setReceta(data.drinks[0]) 
            } catch (error) {
                console.log(error)
            }
        }
        obtenerReceta()
    },[bebidaID])

    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            
            const {data} = await axios(url)

            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    return (
        <BebidasContext.Provider 
            value={{
                consultarBebida,
                 bebidas,
                 handleModalClick,
                 modal,
                 handleBebidaIdClick,
                 receta
                 }}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext
