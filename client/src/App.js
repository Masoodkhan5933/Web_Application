import React from 'react';
import Home from './Home/Home';
import Contactus from './ContactUs/ContactUs';
import LoginPage from './LoginPage/Login';
import SignupPage from './Signup/signup';
import { Routes, Route } from 'react-router-dom';

import Controller from './Bats/Controller';
import Profile from './Profile/Profile';
import ItemBody from './item/Body/body';
import CartPage from './cart/cart';
import Header from './Header_Footer/Header';
import Footer from './Header_Footer/footer';
import { useState } from 'react';
import AddProductPage from './addProduct/addproducts';
import DeletePage from './DeleteProduct/DeleteProduct';
import SellerPage from './adminPage/adminPage';
import DeleteUserPage from './DeleteUser/Deleteuser';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [component, setComponent] = useState('bats');

  function HandleComponent(component) {
    setComponent(component);
  }

  function pushToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  // DOING LOGIN OPERATIONS
  const [user, setUser] = useState([]);

  return (
    <div>
      <Header cartItems={cartItems} HandleComponent={HandleComponent} user={user} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bats" element={<Controller pushToCart={pushToCart} component={component} />} />
        <Route path="/itembody" element={<ItemBody />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/addproduct" element={<AddProductPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/admin" element={<SellerPage />} />
        <Route path="/deleteuser" element={<DeleteUserPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
