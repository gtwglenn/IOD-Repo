import React, { useState } from 'react'; 

function Emoji() {


    const [mood, setMood] = useState('happy');  // happy --> default 

    const toggleMood = () => {

        setMood((prevMood) => (prevMood === 'happy' ? 'sad' : 'happy'));

    };

    const getEmoji = () => {

        return mood === 'happy' ? '😊' : '😢';
    }; 

    return (

        <div>
            <h2>Current Mood: {getEmoji()}</h2>
            <button onClick={toggleMood}>Change Mood</button>
        </div>

    ); 


}


export default Emoji; 