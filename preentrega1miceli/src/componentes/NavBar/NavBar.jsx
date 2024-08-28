import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>Sports DM</h1>
            <nav>
                <ul>
                    <li>Todos</li>
                    <li>Remeras</li>
                    <li>Buzos</li>
                    <li>Camperas</li>
                    <li>Pantalones</li>
                    <li>Accesorios</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar