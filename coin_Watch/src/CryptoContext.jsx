import React, {createContext, useContext, useEffect, useState} from 'react';

const crypto = createContext()

const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("USD")
    const [symbol, setSymbol] = useState("$")

    useEffect(() => {
        if (currency === "USD") setSymbol("$")
        else if (currency === "EUR") setSymbol("€")
    }, [currency]);

    return (
        <>
        <crypto.Provider value={{currency, symbol, setCurrency}}>
            {children}
        </crypto.Provider>
        </>

    );
}

export default CryptoContext;
export const CryptoState = () => {
    return useContext(crypto)
}