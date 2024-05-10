import React, { useEffect } from 'react';

export function TradingViewWidget() {




        useEffect(() => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
            script.innerHTML = `{
            "interval": "1D",
            "width": "100%",
            "isTransparent": true,
            "height": "400",
            "symbol": "CRYPTOCAP:TOTAL",
            "showIntervalTabs": true,
            "displayMode": "single",
            "locale": "en",
            "colorTheme": "dark"
        }`;

            document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);

            return () => {
                document.getElementsByClassName('tradingview-widget-container__widget')[0].removeChild(script);
            };
        }, []);

        return (
            <div className="tradingview-widget-container" style={{ height: '400px' }}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
        );




}

