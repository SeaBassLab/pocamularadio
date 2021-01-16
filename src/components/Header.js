import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import "./styles/header.css"

class Header extends React.Component {
    render() {
        return <div className="header">

            <div className="header__content">

                <div className="links">
                    <Link to="/home"><img src={logo} alt="logo" /></Link>
                </div>
                    <div className="links">
                        <Link to="/home/ajedrez"><strong>AJEDREZ</strong></Link>
                    </div>
                    <div className="links">
                        <Link to="/home/turismo"><strong>TURISMO</strong></Link>
                    </div>
                    <div className="links">
                        <Link to="/home/contactos"><strong>CONTACTOS</strong></Link>
                    </div>
                    <div className="heart">
                        <em><strong>Conectando con el corazón</strong></em>
                    </div>
                </div>
        </div>
    }
}

export default Header