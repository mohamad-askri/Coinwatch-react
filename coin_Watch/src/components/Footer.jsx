import React, {Component} from 'react';

import './destination/Styles/style.css'
import './destination/Bootstrap/css/bootstrap.min.css'
import './destination/Styles/font.css'
import './destination/Styles/dark-style.css'
import './destination/Fonts/css/all.css'
class Footer extends Component {
    render() {
        return (
            <div>
                <body className="body_dark">
                <div className="extension-wrapper">
                <footer className="">
                    <div className="copy-right text-center p-2">
                        <p>Made with ❤️</p>
                    </div>
                </footer>
                </div>
                </body>

            </div>


        );
    }
}

export default Footer;