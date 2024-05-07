import React from 'react'
import {Link} from "react-router-dom"

import './header.css'

const Header = () => {
    return(
        <>
            <header className='header'>
                <h1>Header</h1>
                <nav>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/cadastrar" className='link'>Cadastrar</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;