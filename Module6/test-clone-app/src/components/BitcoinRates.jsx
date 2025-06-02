import { useState } from "react";
import { useData } from "../hooks/useData";
import CustomSelect from "./CustomSelect";
    // ??? 
import { Alert, AlertTitle, Box } from "@mui/material";

import React from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const btcResponse = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, {});
    const btcPrice = btcResponse.bitcoin ? btcResponse.bitcoin[currency.toLowerCase()] : 0;

    const options = currencies.map(curr => ({value: curr, text: curr}))

    return (
        <Box className="BitcoinRates" sx={{maxWidth: 300, my: 0, mx: 'auto'}}>
            <h3>Bitcoin Exchange Rate</h3>
            <CustomSelect label="Choose a currency:" value={currency} options={options} onCustomChange={(e) => setCurrency(e.target.value)}/>
            <Alert severity="success" sx={{mt: 3}}>
                <AlertTitle>BTC Conversion Rate</AlertTitle>
                1 BTC is worth <strong>{btcPrice} {currency}</strong>
            </Alert>
        </Box>
    )

}

export default BitcoinRates;