import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import profile from './profile.png';
import logo from '../Home/logo.png';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../api/userapi';

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const [usersdata, setusersdata] = useState([]);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    getuserDetails();
  }, []);

  const getuserDetails = async () => {
    setusersdata(await getUsers());
    console.log(usersdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    usersdata.map((user) => {
      if (user.email.toLowerCase() === email.toLowerCase() && user.password === password) {
        console.log("found");
        if (user.usertype === 'user') {
          navigate('/seller');
        }
      } else {
        setflag(true);
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
          <a>
            <h4>Signup</h4>
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
