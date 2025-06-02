import React from 'react';
import { createContext, useState } from 'react'; 

export const ThemeContext = createContext(); 


export function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(true); 

    const theme = {

        background: darkMode ? '#313131' : '#C6E6E0', 
        color: darkMode ? '#4288BF' : '#007000', 

    };

    const toggleTheme = () => setDarkMode(!darkMode); 



    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    
    );


}   // end ThemeProvider 




// B-B-B-BONUS SECTION

// #d0e8e4
        // #D0E8E4

        // #313131

        // #4288BF

        // #C6E6E0