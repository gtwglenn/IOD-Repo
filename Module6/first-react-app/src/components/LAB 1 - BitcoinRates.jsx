import { useState, useEffect } from "react"; 

const currencies = [ "USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const [rate, setRate] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {

        const fetchRate = async () => {

            setLoading(true);
            setError(null);

            try {
                
                const response = await fetch(
                    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
                );
                if (!response.ok) throw new Error("Failed to fetch exchange rate");

                const data = await response.json();
                setRate(data.bitcoin[currency.toLowerCase()]);
            
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }


        };    // end async()


        fetchRate(); 
    }, [currency]); 

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (

        <div className="BitcoinRates componentBox">

            <h3>Bitcoin Exchange Rate</h3>

            <label>
                Choose currency: 
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>


        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {rate !== null && !loading && !error && (
            <p>1 BTC = {rate} {currency}</p>
        )}

        </div>
    ); 
}

export default BitcoinRates; 