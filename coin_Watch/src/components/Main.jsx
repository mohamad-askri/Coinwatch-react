/*
import React, {useEffect, useState} from 'react';

import './destination/Styles/style.css';
import './destination/Bootstrap/css/bootstrap.min.css';
import './destination/Bootstrap/js/bootstrap.bundle.min.js'
import './destination/Styles/font.css';
import './destination/Styles/dark-style.css';
import './destination/Fonts/css/all.css';

import axios from "axios";
import {TrendingCoins} from "../config/api.jsx";
import {CryptoState} from "../CryptoContext.jsx";
import {Link} from "react-router-dom";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function Main() {
    const [trending, setTrending] = useState([]);
    const {currency, symbol} = CryptoState();


    const fetchTrendCoin = async () => {
        try {
            const {data} = await axios.get(TrendingCoins(currency));
            setTrending(data);
        } catch (error) {
            console.error("Error fetching trending coins:", error);
        }
    };

    useEffect(() => {
        fetchTrendCoin();
    }, [currency]);


    trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;

        return (
            <>{coin?.symbol}

                {/!*        <div key={coin.id}>
                    <Link to={`/coins/${coin.id}`}>
                        <img src={coin?.image} alt={coin.name} width="50px"/>
                        <span>
                                {coin?.symbol}
                            <span style={{
                                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                fontWeight: 500,
                            }}> {profit && "+"}
                                {coin?.price_change_percentage_24h?.toFixed(2)}% </span>

                            </span>
                        <span style={{fontSize: 22, fontWeight: 500}}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}

        </span>

                    </Link>
                </div>*!/}
            </>
        );
    })
}


{/!*                                           </div>*!/
}*/


import React, {useEffect, useState} from 'react';


import {TradingViewWidget} from "./TradingViewWidget.jsx";

import {CoinList} from "./CoinList.jsx";
import {Header} from "./Header.jsx";
export const Main = () =>{


            return (
                <>

                <div className="main-page">
                    <section id="search-bar" className="">
                        <div className="container-fluid">
                            <div className="input-group rounded-3">
                                <input type="text" className="form-control extension-input"
                                       placeholder="Search for a coin..." />
                                    <div className="input-group-append">
                                        <button className="btn appended-input-btn" type="button" >
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button >
                                    </div>
                            </div>
                        </div>
                    </section>

                    <section id="market-analysis">
                        <div className="container-fluid ">


                               <TradingViewWidget/>


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








