import React from 'react';

const Widget = () => {

    const widgetConfig = {
        interval: "1m",
        width: 425,
        isTransparent: false,
        height: 450,
        symbol: "CRYPTOCAP:TOTAL",
        showIntervalTabs: true,
        displayMode: "single",
        locale: "en",
        colorTheme: "dark"
    };

    return (
        <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div>

            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
                {JSON.stringify(widgetConfig)}
            </script>
        </div>
    );
};

export default Widget;
