import './App.css'

import {Header} from './components/Header'
import {Main} from './components/Main.jsx'
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import {Coinpage} from "./components/Coinpage.jsx";
import {Setting} from "./components/Setting.jsx";
import React from "react";
// import Footer from "./components/Footer.jsx";
// import * as ReactDOM from "react-dom/client";


function App() {


  return (
      <>
      <body className="body_dark">

      <div className="extension-wrapper">
          <BrowserRouter>
<div>

    <Header/>
              <Routes>


                  <Route  path="/"  element={<Main />} exact />
                  <Route  path="/setting"  element={<Setting />}  exact />

                  <Route  path="/coins/:id"  element={<Coinpage/>} />
              </Routes>


</div>

          </BrowserRouter>



          {/*<Footer/>*/}

   </div>
      </body>
      </>
  )
}

export default App
