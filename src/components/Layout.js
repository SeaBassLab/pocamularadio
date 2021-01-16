import React from "react";

import Navbar from './Navbar'
import Header from '../components/Header'
import '../pages/styles/home.css'


function Layout(props){
    return (
        <div className="container">
            <Navbar />
            {props.children}
            <Header />
        </div>
    )
}

export default Layout