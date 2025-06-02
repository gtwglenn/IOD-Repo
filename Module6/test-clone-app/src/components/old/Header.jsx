import { Link } from 'react-router-dom'; 
import React from 'react';
import { useContext } from 'react'; 
import { ThemeContext } from './ThemeContext.jsx';

import '../styles.css';         // ??? theme.object is how to use ThemeContext; see below 


export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext); 

    return (

        <header id="navPanel" style={{ backgroundColor: theme.background, color: theme.color }}>
            <nav id="UPDATE_CSS">
                <p id="pp">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </p>
            </nav>
        </header>

    );

}