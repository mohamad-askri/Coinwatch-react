import React from 'react';
import { TechnicalAnalysis, Ticker } from 'react-ts-tradingview-widgets';

const TradingViewWidget = () => {
    const tickerStyles = {
        parent: {
            display:'none'
        },

    };

    return (
        <>
            <TechnicalAnalysis
                colorTheme="dark"
                width="100%"
                isTransparent={true}
                copyrightStyles={tickerStyles}
                symbol="CRYPTOCAP:TOTAL"
            />



        </>
    );
};

export default TradingViewWidget;
