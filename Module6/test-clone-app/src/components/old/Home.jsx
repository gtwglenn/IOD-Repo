import React from 'react';
import { useContext } from 'react'; 
import { ThemeContext } from './ThemeContext.jsx'; 

export default function Home() {

    const { theme, toggleTheme } = useContext(ThemeContext); 

    return ( 

        <div style={{ backgroundColor: theme.background, color: theme.color }}>                 
            <h2 id="UPDATE_CSS">I THOUGHT DARK MODE FONT WAS SUPPOSED TO BE BLUE</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>

    ); 
}