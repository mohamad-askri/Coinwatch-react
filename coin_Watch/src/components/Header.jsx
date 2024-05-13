// import React, { Component } from 'react'

import './destination/Styles/style.css'
import './destination/Bootstrap/css/bootstrap.min.css'
import './destination/Styles/font.css'
import './destination/Styles/dark-style.css'
import './destination/Fonts/css/all.css'
import LOGO from './destination/Images/Logo/coinwatch-logo.svg'
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
                                <Link  className="extension-logo" to={'/'}>
                                    <h1 >
                                        <img src={LOGO} width="150" alt=""/>
                                    </h1>
                                </Link>
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
