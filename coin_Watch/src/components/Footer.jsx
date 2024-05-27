import React, {Component} from 'react';

import './destination/Styles/style.css'
import './destination/Bootstrap/css/bootstrap.min.css'
import './destination/Styles/font.css'
import './destination/Styles/dark-style.css'
import './destination/Fonts/css/all.css'

import {Tickertapewidget} from "./Tickertapewidget.jsx"


function Footer ({darkMode})  {

        return (


<>
                <footer className="">
                    <div className="copy-right text-center p-2">
                        <p>Made with ❤️</p>
                    </div>
                </footer>



           <Tickertapewidget  darkMode={darkMode}   />

</>
        );
    }


export default Footer;