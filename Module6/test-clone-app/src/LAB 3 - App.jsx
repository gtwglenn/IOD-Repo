import Emoji from './components/Emoji'; 
import BitcoinRates from './components/BitcoinRates'; 
import { MoodProvider } from './components/MoodContext'; 
import { ThemeProvider, ThemeContext } from './component/ThemeContext'; 
import { useContext } from 'react'; 



function AppContent() {

    const { theme, toggleTheme } = useContext(ThemeContext); 

    return (

        <div style={{ backgroundColor: theme.background, color: theme.color, minHeight: '100vh', padding: '1rem' }}>

            <button onClick={toggleTheme}>Toggle Theme</button>
            <Emoji />
            <BitcoinRates />
        </div>

    );

}   // end AppContent()



function App() {

    return (
        <ThemeProvider>
            <MoodProvider>
                <div>
                    <Emoji />
                    <BitcoinRates />
                </div>
            </MoodProvider>
        </ThemeProvider>
    ); 
}   // end App() 


export default App; 