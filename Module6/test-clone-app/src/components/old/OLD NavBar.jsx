import { NavLink } from 'react-router-dom'; 

export default function NavBar() {

    return (

        <nav className="navBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/bitcoin">Bitcoin Rates</NavLink></li>
            </ul>
        </nav>

    );

}