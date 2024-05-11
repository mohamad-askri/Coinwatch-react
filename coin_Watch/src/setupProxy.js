/*
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target:    `https://api.coingecko.com/api/v3/coins/markets?vs_currency==${currency}&order=gecko_desc&per_page=5&sparkline=true&price_change_percentage=24h\n`, // Replace with the base URL of your API
        changeOrigin: true,
    }));
};
fetch('https://api.coingecko.com/api/v3/coins')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));*/
