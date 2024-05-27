
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {SingleCoin, TrendingCoins} from "../config/api.jsx";


export const SearchBar = ({ currency }) => {
    const [query, setQuery] = useState('');
    const [coins, setCoins] = useState([]);
    const [noResults, setNoResults] = useState(false); // State to track no results

    const handleSearch = async (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        if (newQuery.length > 2) {
            const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${newQuery}`);
            const fetchedCoins = response.data.coins; // Fetch all results
            setCoins(fetchedCoins);
            setNoResults(fetchedCoins.length === 0); // Update noResults state
        } else {
            setCoins([]);
            setNoResults(false); // Reset noResults state
        }
        const fetchTrendCoin = async () => {
            try {
                const {data} = await axios.get(TrendingCoins(currency));
                setTrending(data);
            } catch (error) {
                console.error("Error fetching trending coins:", error);
                // You might want to handle errors here, such as displaying an error message to the user.
            }
        };
    };


                return (

                    <section id="search-bar" className="position-relative">
                        <div className="container-fluid">
                            <div className="input-group rounded-3">
                                <input
                                    type="text"
                                    className="form-control extension-input"
                                    placeholder="Search for a coin..."
                                    value={query}
                                    onChange={handleSearch}
                                />
                                <div className="input-group-append">
                                    <button className="btn appended-input-btn" type="button">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            {query.length > 2 && (
                                <ul className="list-group position-absolute w-100 mt-2"
                                    style={{maxHeight: '200px', overflowY: 'auto'}}>
                                    {noResults ? (
                                        <li className="list-group-item">Coin does not exist</li>
                                    ) : (
                                        coins.map((coin) => (
                                            <li key={coin.id} className="list-group-item d-flex align-items-center">
                                                <img src={coin.thumb} alt={coin.name} className="me-2"
                                                     style={{width: '20px', height: '20px'}}/>
                                                <Link to={`/coins/${coin.id}`}
                                                      style={{textDecoration: 'none', color: 'inherit'}}>
                                                    {coin.name}
                                                </Link>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            )}
                        </div>
                    </section>
                );

};

/*import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [coins, setCoins] = useState([]);
    const [noResults, setNoResults] = useState(false); // State to track no results

    const handleSearch = async (event) => {
        const newQuery = event.target.value;
        console.log("New query:", newQuery);
        setQuery(newQuery);
        if (newQuery.length > 2) {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list`);
                const coinList = response.data;
                console.log("Coin list:", coinList);

                // Filter the coin list based on the query
                const filteredCoins = coinList.filter((coin) =>
                    coin.name.toLowerCase().includes(newQuery.toLowerCase())
                );
                console.log("Filtered coins:", filteredCoins);

                if (filteredCoins.length === 0) {
                    setNoResults(true); // No results found
                    setCoins([]); // Clear previous search results
                } else {
                    setCoins(filteredCoins);
                    setNoResults(false); // Reset noResults state
                }
            } catch (error) {
                console.error('Error searching for coins:', error);
                setNoResults(true); // Error occurred, set no results found
                setCoins([]); // Clear previous search results
            }
        } else {
            setCoins([]);
            setNoResults(false); // Reset noResults state
        }
    };


    return (
        <div className="row">
            <section id="search-bar" className="position-relative">
                <div className="container-fluid">
                    <div className="input-group rounded-3">
                        <input
                            type="text"
                            className="form-control extension-input"
                            placeholder="Search by coin name..."
                            value={query}
                            onChange={handleSearch}
                        />
                        <div className="input-group-append">
                            <button className="btn appended-input-btn" type="button">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    {query.length > 2 && (
                        <ul className="list-group position-absolute w-100 mt-2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {noResults ? (
                                <li className="list-group-item">No results found</li>
                            ) : (
                                coins.map((coin) => (
                                    <li key={coin.id} className="list-group-item d-flex align-items-center">
                                        <img src={coin.thumb} alt={coin.name} className="me-2" style={{ width: '20px', height: '20px' }} />
                                        <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {coin.name}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    );
};*/


/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const SearchBar = ({ currency }) => {
    const [query, setQuery] = useState('');
    const [coins, setCoins] = useState([]);
    const [noResults, setNoResults] = useState(false); // State to track no results

    const handleSearch = async (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        if (newQuery.length > 2) {
            try {
                // Search for coins
                const searchResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/list`);
                const coinList = searchResponse.data;

                // Filter the coin list based on the query
                const filteredCoins = coinList.filter((coin) =>
                    coin.name.toLowerCase().includes(newQuery.toLowerCase()) ||
                    coin.symbol.toLowerCase().includes(newQuery.toLowerCase())
                );

                if (filteredCoins.length === 0) {
                    setNoResults(true); // No results found
                    setCoins([]); // Clear previous search results
                } else {
                    // Fetch prices for each coin
                    const coinDataPromises = filteredCoins.map(async (coin) => {
                        try {
                            const priceResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=${currency.toLowerCase()}`);
                            const priceData = priceResponse.data;
                            const price = priceData[coin.id][currency.toLowerCase()];
                            return { ...coin, price };
                        } catch (error) {
                            console.error(`Error fetching price for ${coin.id}:`, error);
                            return coin; // Return the original coin data if fetching fails
                        }
                    });

                    const coinsWithData = await Promise.all(coinDataPromises);
                    setCoins(coinsWithData);
                    setNoResults(false); // Reset noResults state
                }
            } catch (error) {
                console.error('Error searching for coins:', error);
                setNoResults(true); // Error occurred, set no results found
                setCoins([]); // Clear previous search results
            }
        } else {
            setCoins([]);
            setNoResults(false); // Reset noResults state
        }
    };

    return (
        <div className="row">
            <section id="search-bar" className="position-relative">
                <div className="container-fluid">
                    <div className="input-group rounded-3">
                        <input
                            type="text"
                            className="form-control extension-input"
                            placeholder="Search for a coin..."
                            value={query}
                            onChange={handleSearch}
                        />
                        <div className="input-group-append">
                            <button className="btn appended-input-btn" type="button">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    {query.length > 2 && (
                        <ul className="list-group position-absolute w-100 mt-2  " style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {noResults ? (
                                <li className="list-group-item">No results found</li>
                            ) : (
                                coins.map((coin) => (
                                    <li key={coin.id} className="list-group-item d-flex align-items-center">
                                        <img src={coin.thumb} alt={coin.name} className="me-2" style={{ width: '20px', height: '20px' }} />
                                        <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {coin.name} - {coin.price} {currency.toUpperCase()}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    );
};

*/
