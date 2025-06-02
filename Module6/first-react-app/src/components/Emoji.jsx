import { useContext } from 'react'; 
import { MoodContext } from './MoodContext.jsx'; 

export default function Emoji() {

    const { mood, changeMood } = useContext(MoodContext); 


    return (

        <div>
            <h2>Current Mood: {mood}</h2>
            <button onClick={changeMood}>Change Mood</button>
        </div>

    );

}   // end Emoji() 