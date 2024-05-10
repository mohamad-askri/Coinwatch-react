/*
import React, {Component} from 'react';

import axios from "axios";
import { TrendingCoins } from "../config/api.jsx";
import { CryptoState } from "../CryptoContext.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function CoinList () {
    const [trending, setTrending] = useState([]);
    const { currency ,symbol } = CryptoState();

const fetchTrendCoin = async () => {
    try {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
    } catch (error) {
        console.error("Error fetching trending coins:", error);
    }
};

useEffect(() => {
    fetchTrendCoin();
}, [currency]);


        return (
            <div>

            </div>
        );
    }


*/
import axios from "axios";
import {TrendingCoins} from "../config/api.jsx";
import {CryptoState} from "../CryptoContext.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const CoinList = () => {
    const [trending, setTrending] = useState([]);
    const {currency, symbol} = CryptoState();

    const fetchTrendCoin = async () => {
        try {
            const {data} = await axios.get(TrendingCoins(currency));
            setTrending(data);
        } catch (error) {
            console.error("Error fetching trending coins:", error);
            // You might want to handle errors here, such as displaying an error message to the user.
        }
    };

    useEffect(() => {
        fetchTrendCoin();
    }, [currency]);

    return (
        <div className="row">
            {trending.map((coin) => {
                let profit = coin?.price_change_percentage_24h >= 0;

                return (
                    <div className="col-12 coin" key={coin.id}>

                            <div className="extension-card">
                                <div className="coin-card">
                                    <div className="coin-profile col-5">
                                        <div className="coin-icon">
                                            <img src={coin?.image} alt={coin.name} width="50px"/>
                                        </div>
                                        <div className="coin-information">
                                            <h2 className="coin-name">{coin.name}</h2>
                                            <div className="coin-abbreviation">{coin.symbol}</div>
                                        </div>
                                    </div>
                                    <div className="coin-small-chart col-4">
                                        <img src="destination/Images/Charts/Chart.svg" alt="Chart" className="img-fluid"/>
                                    </div>
                                    <div className="coin-value col-3">
                                        <h3 className="coin-price">{`${symbol} ${numberWithCommas(coin?.current_price.toFixed(2))}`}</h3>
                                        <span className={`coin-change ${profit ? "bullish" : "bearish"}`}>
                                    {profit ? "+" : ""}{coin?.price_change_percentage_24h?.toFixed(2)}%
                                </span>
                                    </div>
                                </div>
                            </div>

                    </div>
            );
            })}
            </div>
            )

            }