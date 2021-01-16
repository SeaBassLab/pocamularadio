import React from 'react'

import '../components/styles/header.css'
import './styles/turismo.css'
import fondo from '../components/styles/images/fondo2.jpg'
import logo_turismo from './styles/images/turismo1.jpg'
import logo_turismo2 from './styles/images/turismo2.jpg'


class Turismo extends React.Component {
    render() {
        return (               
                <div className="section">
                    <div className="section_content_turismo">
                        <div className="fix_content_t">
                            <div className="title">
                                <h2><strong>Una ciudad para concretar tus sueños</strong></h2>
                                <h1><strong>Ushuaia</strong></h1>
                            </div>
                            <div className="image_container">

                                <div className="image">

                                    <div className="info">
                                        <img src={logo_turismo} alt="logo turismo"></img>
                                    </div>

                                    <div className="info_content">
                                        <p><strong>Ushuaia</strong> es una ciudad turística de <strong>Argentina</strong>. Se ubica en el archipiélago de Tierra del Fuego, el extremo austral de Sudamérica, apodado el <strong>"Fin del Mundo"</strong>.</p>
                                    </div>

                                </div>

                                <div className="image">

                                    <div className="info">
                                        <img src={logo_turismo2} alt="logo turismo"></img>
                                    </div>
                                    
                                    <div className="info_content">
                                        <p> Fue fundada el <strong>12 de octubre de 1884</strong> por <em>Augusto Lasserre</em> como <strong>Fuerte Ushuaia</strong> sobre el asentamiento de la antigua misión anglicana de <strong>Thomas Bridges</strong>.</p>
                                    </div>
                                </div>

                                <div className="image">

                                    <div className="info">
                                        <img src={fondo} alt="logo turismo"></img>
                                    </div>
                                    
                                    <div className="info_content">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> 
        )
    }
}

export default Turismo