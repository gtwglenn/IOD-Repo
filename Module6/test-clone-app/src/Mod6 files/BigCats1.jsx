import React, { useState } from 'react'; 

const BigCats = () => {

    const [cats, setCats] = useState ([
        
        { name: 'Lion', family: 'Felidae' },
        { name: 'Tiger', family: 'Felidae' },
        { name: 'Leopard', family: 'Felidae' },
        { name: 'Jaguar', family: 'Felidae' },
        { name: 'Cheetah', family: 'Felidae' },
        { name: 'Snow Leopard', family: 'Felidae' },
        { name: 'Cougar', family: 'Felidae' },
        { name: 'Panther', family: 'Panthera' },
        { name: 'Lynx', family: 'Felidae' },

    ]);

    const [originalCats] = useState ([ 

        { name: 'Lion', family: 'Felidae' },
        { name: 'Tiger', family: 'Felidae' },
        { name: 'Leopard', family: 'Felidae' },
        { name: 'Jaguar', family: 'Felidae' },
        { name: 'Cheetah', family: 'Felidae' },
        { name: 'Snow Leopard', family: 'Felidae' },
        { name: 'Cougar', family: 'Felidae' },
        { name: 'Panther', family: 'Panthera' },
        { name: 'Lynx', family: 'Felidae' },

    ]);

    const sortCats = () => { 

        setCats([...cats].sort((a, b) => a.name.localeCompare(b.name))); 

    }; 

    const reverseCats = () => {

        setCats([...cats].reverse()); 

    }; 

    const filterByPanthera = () => {

        setCats(cats.filter(cat => cat.family === 'Panthera'));
        
    };

    const resetList = () => {

        setCats(originalCats); 

    };

    return (

    <div>
      
        <h1>Big Cats</h1>
      
        <div>
            <button onClick={sortCats}>Sort Alphabetically</button>
            <button onClick={reverseCats}>Reverse List</button>
            <button onClick={filterByPanthera}>Show Panthera</button>
            <button onClick={resetList}>Reset</button>
        </div>
      
        <ul>
            {cats.map((cat, index) => (
                <li key={index}>{cat.name} - {cat.family}</li>
            ))}
        </ul>

    </div>

    ); 

}; 


export default BigCats; 