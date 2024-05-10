// import React, { Component } from 'react'

import './Dist/Styles/style.css'
import './Dist/Bootstrap/css/bootstrap.min.css'
import './Dist/Styles/font.css'
import './Dist/Styles/dark-style.css'
import './Dist/Fonts/css/all.css'
import LOGO from './Dist/Images/Logo/coinwatch-logo.svg'
import {Link, useNavigate} from "react-router-dom";

export  function Header() {
    let navigate = useNavigate();
    return (
        <>

            <header className="mb-4">
                <section id="header" className="p-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 header-wrapper">
                                <a href="#"  className="extension-logo">
                                    <h1 onClick={()=>navigate('/')}>
                                        <img src={LOGO} width="150" alt=""/>
                                    </h1>
                                </a>
                                <Link className="extension-settings" to={'/setting'}>


                                    <i className="fa-solid fa-gear"   ></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

// export default header
