/*

/!*export const TrendingCoins = (currency) => {
    const options = {
        headers: {
            'x-access-token': 'coinrankingf89decd2393dbd09568685d9fdae3c949b672b5c052d9f6d',
        },
    };

    return fetch(`https://api.coinranking.com/v2/coins/${currency}`, options)
        .then((response) => response.json())
        .then((result) => console.log(result));
};*!/
*/

export const CoinList = (currency) =>

    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;



// export const TrendingCoins = (currency) =>
//     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=5&sparkline=true
// `;
// // export const TrendingCoins = (currency) =>
// //     `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=5&sparkline=false`;

export const fetchTop5Coins = () => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'coinrankingf89decd2393dbd09568685d9fdae3c949b672b5c052d9f6d',
        },
    };

    return fetch('https://api.coinranking.com/v2/coins', options)
        .then((response) => response.json())
        .then((result) => {
            if (result && result.data && result.data.coins) {
                return result.data.coins.slice(0, 5); // Slice the array to get the top 5 coins
            } else {
                console.error('Unexpected response format:', result);
                return []; // Return an empty array if the response format is unexpected
            }
        })
        .catch((error) => {
            console.error('Error fetching top 5 coins:', error);
            return []; // Handle error appropriately
        });
};
