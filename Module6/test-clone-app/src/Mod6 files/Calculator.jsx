import { useState } from "react"
import './Calculator.css'           // css for calculator app?? 

function Calculator() {

    const [firstNumber, setFirstNumber] = useState(0); 
    const [secondNumber, setSecondNumber] = useState(0); 
    const [operation, setOperation] = useState('+'); 
    const [result, setResult] = useState(''); 
    let display = firstNumber + ' ' + operation + ' ' + secondNumber; 


    const handleSubmit = (e) => {

        e.preventDefault(); 

        switch (operation) {

            case '+': setResult(firstNumber + secondNumber); break;
            case '-': setResult(firstNumber - secondNumber); break;
            case '*': setResult(firstNumber * secondNumber); break;
            case '/': setResult(firstNumber / secondNumber); break;

        }

        setFirstNumber(0);
        setSecondNumber(0);
        setOperation('+');

    }


    const handleSetNumber = (e) => {

        let inputNumber = parseInt(e.target.value); 
        
        if (e.target.name === 'first') 
            setFirstNumber(inputNumber); 

        if (e.target.name === 'second')
            setSecondNumber(inputNumber); 

        setResult('');

    }



    return (

        <div className="Calculator">

            <form onSubmit={handleSubmit}>
                <label>
                    Number 1:<br/>
                    <input type="number" name="first" value={firstNumber} onChange={handleSetNumber} />
                </label>

                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>

                <label>
                    Number 2:<br/>
                    <input type="number" name="first" value={secondNumber} onChange={handleSetNumber} />
                </label>

                <button>Calculate</button>

            </form>

            <div style={{background: '#ddd', fontWeight: 'bold', padding: '1em'}}>{result ? result : display}</div>

        </div>


    )

}


export default Calculator 