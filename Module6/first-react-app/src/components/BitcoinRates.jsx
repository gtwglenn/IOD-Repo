import { useState } from 'react'; 
import useBitcoinRates from '../hooks/useBitcoinRates.jsx'; 
import { MoodContext } from './MoodContext.jsx'; 

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// export default function BitcoinRates() {  ???

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    const { rate, loading, error } = useBitcoinRates(currency); 
    const { mood } = useContext(MoodContext); 

    const options = currencies.map((curr) => (

        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (

        <div className="BTC_container-main">

            <div className="CSS CLASS NAME FOR DISPLAY BOX">
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

            <div className="CSS CLASS NAME FOR DISPLAY BOX">

                <h3>Somewhere along the blockchain, a computer says: {mood} </h3>

                <p>So, this should just display the defeault/useState value \n 
                    or whatever the current value of openSquiqly-mood-closedSquiqly is? \n
                    I am just confused as to where the div produced by \n 
                    Emoji-dot-jsx would be displayed \n
                    ie where the button to change the mood is...? </p>                

            </div>



        </div>


    );

}

export default BitcoinRates; 