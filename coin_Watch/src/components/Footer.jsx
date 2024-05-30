import React, {Component} from 'react';

import './destination/Styles/style.css'
import './destination/Bootstrap/css/bootstrap.min.css'
import './destination/Styles/font.css'
import './destination/Styles/dark-style.css'
import './destination/Fonts/css/all.css'

import {Tickertapewidget} from "./Tickertapewidget.jsx"
import {Link} from "react-router-dom";



function Footer ({darkMode})  {

        return (


<>
                <footer className="copy-right text-center p-2">
                    {/*<Link to={'/about/us'}>*/}

                    <a href="#">
                        <p>Made with ❤️</p>

                    </a>
                    {/*</Link>*/}

                </footer>



           <Tickertapewidget  darkMode={darkMode}   />

</>
        );
    }


export default Footer;