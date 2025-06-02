import { NavLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../components/UserContext';

export default function NavBar() {
  const { currentUser, handleUpdateUser } = useUserContext();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (currentUser.email) {
      handleUpdateUser({}); // logout
      navigate('/');        // go home
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="NavBar">
      <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/dash">Dashboard</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li>
          <button onClick={handleAuthClick}>
            {currentUser.email ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </nav>
  );
}