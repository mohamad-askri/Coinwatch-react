
import React, {useEffect, useState} from 'react';

import TradingViewWidget from './TradingViewWidget.jsx'; // Correct import statement


import {CoinList} from "./CoinList.jsx";
import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {SearchBar} from "./Searchbar.jsx";

// import CryptoChart from "./CryptoChart.jsx";


export const Mainpage = ({darkMode}) =>{



    return (
        <>

            <div className="main-page">
             <SearchBar/>

                <section id="market-analysis">
                    <div className="container-fluid ">


                        <TradingViewWidget darkMode={darkMode} />

                        {/*<Widget/>*/}

                    </div>
                </section>

                <section id="top-5-coins" className="mb-5">
                    <div className="container-fluid">
                        <div className="section-header text-start text-uppercase mb-3">
                            <h2>Top 5 Coins</h2>
                        </div>



                        <CoinList/>


                    </div>
                </section>

            </div>


        </>

    )};








