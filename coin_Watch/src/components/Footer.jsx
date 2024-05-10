import React, {Component} from 'react';

import './Dist/Styles/style.css'
import './Dist/Bootstrap/css/bootstrap.min.css'
import './Dist/Styles/font.css'
import './Dist/Styles/dark-style.css'
import './Dist/Fonts/css/all.css'
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