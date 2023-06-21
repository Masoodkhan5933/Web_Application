import styles from './Header.module.css';
import logo from '../Home/logo.png';
import search from './search.jpeg';
import cart from './cart.jpeg';
import profile from '../LoginPage/profile.png';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles2 from '../ContactUs/ContactUs.module.css';

const Header = ({cartItems,HandleComponent}) => {
    // {cartcount}
    const [cartcount,setcartcount]=useState(0);
    
    
    const navigate=useNavigate();

    return(
        <div className={styles.full_header}>

        <div className={styles.navbar}>
        <Link to='/home'><img  src={logo} alt="" width="100px" height="100px"/></Link>
        <h2 >SKY SPORTS</h2>
        
        <div className={styles.searchbar}>
            <input
                type="text"
                placeholder="Search"
            />
            <button id={styles.searchbutton} type="submit">
            <img src={search} width="30px" alt='' />
            </button>
        </div>
        
        
        <div className={styles.button_link}>
            <div className={styles.cart_profile} >
            <Link to='/cart'><div className={styles.cart}>
                    <img src={cart} alt='cart' width="40px" height="40px"/>
                    <p>{cartItems.length}</p>
                </div>
            </Link>
            <Link to='/profile'>
                <div className={styles.profile}>
                <img src={profile} alt='profile' width="40px" height="40px"/>
                </div>
            </Link>    
            </div>
            <button className={styles.l_S_btn} onClick={()=>navigate('/')}>Login</button>
            <button className={styles.l_S_btn} onClick={()=>navigate('/signup')}>Signup</button>
            {/* <button className={styles.l_S_btn} onClick={()=>navigate('/product')}>Add Product</button> */}
            

           <Link to='/'> <a href="home.html"> Home</a></Link>
           <Link to='/contactus'><a href="contactus.html">Contact Us</a></Link>
        </div>
            
        </div>
        <div className={styles2.top}>
            <div className={styles2.buttons}>
            <Link to={'/bats'} ><button className={styles2.i_button} onClick={() =>HandleComponent('bats')}>Cricket Bats</button></Link>
            <Link to={'/bats'} ><button className={styles2.i_button} onClick={() =>HandleComponent('keeping')}>Wicket Keeping</button></Link>
            <Link to={'/bats'} ><button className={styles2.i_button} onClick={() =>HandleComponent('clothing')}>Cloting</button></Link>
            <Link to={'/bats'} ><button className={styles2.i_button} onClick={() =>HandleComponent('shoes')}>Cricket Shoes</button></Link>
            <Link to={'/bats'} ><button className={styles2.i_button} onClick={() =>HandleComponent('protection')}>Protections</button></Link>
            
            </div>
        </div>
        </div>
    );

}
export default Header;