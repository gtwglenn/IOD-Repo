import { createContext, useState } from 'react'; 

export const MoodContext = createContext(); 

export function MoodProvider({ children }) {

    const [mood, setMood] = useState(",':^D"); 

    const changeMood = () => {

        const moods = [ "¯\_(ツ)_/¯", "(=^ェ^=)", "( ͡ᵔ ͜ʖ ͡ᵔ )", "(｡◕‿◕｡)", "☉_☉", "(•_•)", "(ಠ_ಠ)" ];
        const randomMood = moods[Math.floor(Math.random() * moods.length)]; 
        setMood(randomMood);

    };  // end changeMood 

    return (

        <MoodContext.Provider value={{ mood, changeMood }}>
            {children}
        </MoodContext.Provider>


    );


}   // end MoodProvider 