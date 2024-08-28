import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Venta de ropa deportiva"/>
        </>
    )
}

export default App