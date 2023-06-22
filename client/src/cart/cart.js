import React, { useState, useMemo} from 'react';
import './cart.css';
import cart from '../Header_Footer/cart.jpeg';

const CartPage = ({ cartItems, setCartItems }) => {

  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [orderGenerated, setOrderGenerated] = useState(false);


  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const cartItemElements = cartItems.map((item) => (
    <div className="cart-item" key={item.id}>
      <img src={item.image} alt="pic" style={{ width: '50px' }} />
      <h3>{item.name}</h3>
      <p>Price: £{item.price}</p>
      <button onClick={() => handleRemoveItem(item.id)}>x</button>
    </div>
  ));

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  }, [cartItems]);

  const handleProceed = () => {
    setShowMenu(true); 
  };


  const handleConfirm = () => {
   if (address !== '' && phoneNumber !== '') {
      setOrderGenerated(true);
    }
  };

  return (
    <div>
      <div className="cart-page">
        <img src={cart} alt="pic" height="100px" />
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div className="item_details">
            {cartItemElements}
            <p className="total-price">Your Total Price is: £{totalPrice}</p>
            <button className="proceed-btn" onClick={handleProceed}>
              Proceed
            </button>
            {showMenu && (
              <div className="proceed-menu">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button className="confirm-btn" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            )}
            {orderGenerated && (
              <p className="success-message">Order successfully generated!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
