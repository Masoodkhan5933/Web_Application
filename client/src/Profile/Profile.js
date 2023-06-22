import React from 'react';
import styles from './Profile.module.css';
import { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { getUsers } from '../api/userapi';

const UserProfile = ({user}) => {
 
  //users from DB
  const [users,setuser]=useState([]);
  useEffect(()=>{  
    getUserdetails();
  },[getUserdetails()])

  const getUserdetails= async ()=>{
   const result = await getUsers();
   console.log(result)
    setuser(user)
  }






  const navigate = useNavigate();

  return (
    <div className={styles.body}>
        <div className={styles.Container}>

        <div className={styles.profile}>
        <img src='https://cdn.vectorstock.com/i/preview-1x/45/79/male-avatar-profile-picture-silhouette-light-vector-4684579.jpg' alt='' width="170px" style={{borderRadius:"50%"}}/>
            <h3>Name : <label>{users.name}</label></h3>

            <h3>DOB : <label>{users.dob}</label></h3>
            
            <h3>Email : <label>{users.email}</label></h3>
            
            <h3> Role: <label>{users.role}</label></h3>

            <button onClick={()=>navigate('/home')}>Back to Home page</button>
        </div>
        
        </div>
    </div>
  );
};

export default UserProfile;
