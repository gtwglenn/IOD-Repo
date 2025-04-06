import { useState } from 'react'; 
import useBitcoinRates from '../hooks/useBitcoinRates.jsx'; 

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const { rate, loading, error } = useBitcoinRates(currency); 

    const options = currencies.map((curr) => (

        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (

        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>


        <label>
            Choose Currency: 
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {options}
            </select>
        </label>


        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {rate !== null && !loading && !error && (
            <p>
                1 BTC = {rate} {currency}
            </p>
        )}

        </div>

    );

}

export default BitcoinRates; 