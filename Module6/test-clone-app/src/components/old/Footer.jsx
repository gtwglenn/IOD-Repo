import React from 'react';
import { useContext } from 'react'; 
import { ThemeContext } from './ThemeContext.jsx';

export default function Footer() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <footer id="UPDATE_CSS" style={{ backgroundColor: theme.background, color: theme.color }}>
            <p>B O T T O M     T E X T</p>
        </footer>
    ); 

}