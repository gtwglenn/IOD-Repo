import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext"; 

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState('');

  const { currentUser, handleUpdateUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult('Password must be at least 5 chars long');
    } else if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address');
    } else {
      setSubmitResult('Successful login.');
      handleUpdateUser({ email: userEmail });
      navigate('/'); // redirect to Home
    }
  };

  if (currentUser.email) {
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm componentBox">
      <label>Email:
        <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
      </label>
      <label>Password:
        <input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
      <div>{submitResult}</div>
    </form>
  );
}

export default LoginForm;