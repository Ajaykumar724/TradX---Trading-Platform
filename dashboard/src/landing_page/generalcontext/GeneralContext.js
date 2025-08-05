import React, { useState } from 'react';

import BuyActionWindow from '../buyaction/BuyActionWindow';

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [seletedStockUID, setSelectedStockUID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }

    return (
        <GeneralContext.Provider value={{
            openBuyWindow: handleOpenBuyWindow,
            closeBuyWindow: handleCloseBuyWindow,
            isBuyWindowOpen,
            seletedStockUID
        }}>
            {props.children}
            {/* {isBuyWindowOpen && <BuyActionWindow uid={seletedStockUID} />} */}

        </GeneralContext.Provider>
    );
};

export default GeneralContext;