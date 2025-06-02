import { Routes, Route } from 'react-router-dom'; 
import Homepage from '../pages/Homepage'; 
import LoginForm from '..components/LoginForm'; 
import BitCoinRates from '../components/BitcoinRates'; 

export default function AppRoutes() {

    return (

        <Routes>
            <Route path="/" element={<Homepage />}  />
            <Route path="/login" element={<LoginForm />}  />
            <Route path="/bitcoin" element={<BitcoinRates />}  />
        </Routes>

    );

}