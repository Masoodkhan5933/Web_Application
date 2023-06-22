import React, { useState, useRef } from 'react';
import styles from './SignupPage.module.css';
import Header from '../Header_Footer/Header';
import { addUser } from '../api/userapi';

const SignupPage = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const selectedOptionRef = useRef(null);
  const termsAcceptedRef = useRef(null);
  const dobInputRef = useRef(null);
  const userTypeRef = useRef(null); // Ref for user type

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    selectedOption: '',
    dob: '',
    userType: ''
  });

  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming signup is successful
      setSignupSuccess(true);
      // console.log(formData)
      await addUser(formData)
    } catch (error) {
      console.log(error);
    }
  };

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  return (
    <div>
      <div className={styles.signup_page}>
        <form className={styles.signup_form} onSubmit={handleSubmit}>
          <h2>Create an Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={nameInputRef}
            onFocus={() => handleFocus(nameInputRef)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={emailInputRef}
            onFocus={() => handleFocus(emailInputRef)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={passwordInputRef}
            onFocus={() => handleFocus(passwordInputRef)}
          />
          <select
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleChange}
            className={styles.signup_input}
            required
            ref={selectedOptionRef}
            onFocus={() => handleFocus(selectedOptionRef)}
          >
            <option value="">Select an option</option>
            <option value="batsman">Batsman</option>
            <option value="bowler">Bowler</option>
            <option value="allrounder">All Rounder</option>
          </select>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={dobInputRef}
            onFocus={() => handleFocus(dobInputRef)}
          />
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className={styles.signup_input}
            required
            ref={userTypeRef}
            onFocus={() => handleFocus(userTypeRef)}
          >
            <option value="">Select user type</option>
            <option value="user">User</option>
            <option value="seller">Seller</option>
            <option value="admin">Seller</option>
          
          </select>
          <label className={styles.signup_checkbox_label}>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              required
              className={styles.signup_checkbox}
              ref={termsAcceptedRef}
              onFocus={() => handleFocus(termsAcceptedRef)}
            />
            Accept Terms and Conditions
          </label>
          <button type="submit" className={styles.signup_button}>
            Sign Up
          </button>
          {signupSuccess && <p className={styles.message}>Signed up successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
