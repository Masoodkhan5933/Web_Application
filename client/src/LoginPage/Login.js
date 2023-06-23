import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import profile from './profile.png';
import logo from '../Home/logo.png';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../api/userapi';

const LoginPage = ({ setUser,setloginflag }) => {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const [usersdata, setusersdata] = useState([]);
  const [flag, setflag] = useState(false);

  const getuserDetails = async () => {
    setusersdata(await getUsers());
    console.log(usersdata);
  };

  useEffect(() => {
    getuserDetails()
    setloginflag(true)
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    usersdata.map((user) => {
  if (user.email.toLowerCase() === email.toLowerCase() && user.password === password) {
    
    console.log("found");
    setUser(user);
    if (user.usertype === 'admin') {
      navigate('/admin');
    }
    if (user.usertype === 'user') {
      setloginflag(true)
      navigate('/home');
    }
    if (user.usertype === 'seller') {
      navigate('/addproduct');
    }
    return null; // Add a return statement here
  } else {
    setflag(true);
    return null; // Add a return statement here
  }
});

    setErrorMessage(flag);
  };

  return (
    <div>
      <div className="login_page">
        <div className="title_logo">
          <img src={logo} alt="" width="100px" />
          <h1 className="title">STAR SPORTS</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <img src={profile} alt="" height="70px" />
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && <p className="error-message">Invalid Username or Password</p>}
          <button type="submit">Login</button>
          <button style={{margin:"10px 0px"}} onClick={()=>navigate('/signup')}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;