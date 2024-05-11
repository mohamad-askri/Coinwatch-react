import React, { useEffect, useRef } from 'react';

export function TradingViewWidget() {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
        script.innerHTML = JSON.stringify({
            interval: '1D',
            width: '100%',
            isTransparent: true,
            height: '400',
            symbol: 'CRYPTOCAP:TOTAL',
            showIntervalTabs: true,
            displayMode: 'single',
            locale: 'en',
            colorTheme: 'dark'
        });

        containerRef.current.appendChild(script);

        return () => {
            containerRef.current.removeChild(script);
        };
    }, []);

    return (
        <div  ref={containerRef} style={{ height: '400px' }}>
            <div ></div>
        </div>
    );
}
