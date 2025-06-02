import React from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import { useContext } from 'react';

export default function About() {

    const { theme, toggleTheme } = useContext(ThemeContext); 

    return (
    
        <div>
            <h2 id="UPDATE_CSS">About Us</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}