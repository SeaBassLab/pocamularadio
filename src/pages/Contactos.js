import React from 'react'

import '../components/styles/header.css'
import './styles/contactos.css'


class Contactos extends React.Component{
    render(){
        return (
            <div className="section">
                <div className="section_content_contact">
                    <div className="fix_content">
                      
                      <div className="contact_container">
                          <div className="contact_info">
                          <div className="fix_info fix">
                              <div className="contact_background">
                              <div className="contact"></div>
                              </div>
                              <div>
                              <h2>Horacio Pulido</h2>
                              <h3>Announcer</h3>
                              <h3>Producer</h3>
                              </div>                             
                            </div>
                            <br /> 
                            <div className="fix">
                            <h1>CEO</h1>                           
                              <h1>&</h1>
                              <em>
                                <h2>
                                  Founder of Pocamula Radio
                                </h2>
                              </em> 
                              </div>                           
                          </div>
                      </div>
                                    
                      <div className="contact_container">
                          <div className="contact_info">
                            <div className="fix_info fix">
                              <div className="contact_background">
                              <div className="contact_2"></div>
                              </div>
                                <div>
                                <h2>Sebastián Pulido</h2>
                                <h3>Frontend Developer</h3>
                                <h3>Entrepreneur</h3>
                                <h3>Announcer</h3>
                                <h3>DevOps</h3>
                              </div>
                            </div>
                            <br /> 
                            <div className="fix">
                            <h1>CTO</h1>                           
                              <h1>&</h1>
                              <em>
                                <h2>
                                  Cofounder of Pocamula Radio
                                </h2>
                              </em> 
                              </div> 
                          </div>
                      </div>
                      
                      <div className="footer fix">
                          <div><h2><em>pocamularadio@gmail.com</em></h2></div>
                          <div><h2><em>gerencia@pocamularadio.com.ar</em></h2></div>
                            
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contactos
