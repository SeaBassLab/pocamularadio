import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import './styles/app.css'

import Layout from './Layout'
import Home from '../pages/Home'
import Turismo from '../pages/Turismo'
import Contactos from '../pages/Contactos'
import Sincro from '../pages/Sincro'
import NMG from '../pages/NMG'
import Recetas from '../pages/Recetas'
import Karaoke from '../pages/Karaoke'
import NotFound from '../pages/NotFound'
import Ajedrez from '../pages/Ajedrez'


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch className="container">
                    <Route exact path="/home" component={Home} />       
                    <Route exact path="/home/ajedrez" component={Ajedrez} />       
                    <Route exact path="/home/turismo" component={Turismo} />
                    <Route exact path="/home/contactos" component={Contactos} />
                    <Route exact path="/home/sincro" component={Sincro} />
                    <Route exact path="/home/nmg" component={NMG} />
                    <Route exact path="/home/recetas" component={Recetas} />
                    <Route exact path="/home/karaoke" component={Karaoke} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App