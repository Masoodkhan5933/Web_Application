import React, { useEffect } from 'react';
import Home from './Home/Home';
import Contactus from './ContactUs/ContactUs';
import LoginPage from './LoginPage/Login';
import SignupPage from './Signup/signup';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Controller from './Bats/Controller';
import Profile from './Profile/Profile';
import ItemBody from './item/Body/body';
import CartPage from './cart/cart';
import Header from './Header_Footer/Header';
import Footer from './Header_Footer/footer';
import { useState } from 'react';
import { getProducts } from './api/product';
import AddProductPage from './addProduct/addproducts';
import DeletePage from './DeleteProduct/DeleteProduct';
import SellerPage from './sellerPage/sellerPage';


function App() {
  

  const [cartItems, setCartItems] = useState([
    
  ]);

  const [component,setComponent]=useState("bats");

  function HandleComponent(component){
      setComponent(component);
    }

  function pushToCart(item){
    setCartItems((prevItems) => [...prevItems, item]);
  }

  //DOING LOGIN OPERATIONS
  const [user,setUser]=useState([]);
  
  
  return (
 <div>
  <Header cartItems={cartItems} HandleComponent={HandleComponent}/>
  <Routes>
 
  <Route path='/home' element={<Home />}/>

  <Route path='/bats' element={<Controller pushToCart={pushToCart} component={component}/>}/>

  <Route path='/itembody' element={<ItemBody />}/>

  <Route path='/contactus' element={<Contactus />}/>
  
  <Route path='/signup' element={<SignupPage />}/>
  
  <Route path='/' element={<LoginPage setUser={setUser}/>}/>
  
  <Route path='/profile' element={<Profile />}/>
  
  <Route path='/cart' element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
  
  <Route path='/addproduct' element={<AddProductPage/>}/>

  <Route path='/delete' element={<DeletePage/>}/>
  
  <Route path='/seller' element={<SellerPage/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
