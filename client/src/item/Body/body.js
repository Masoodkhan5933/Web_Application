import './body.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ItemBody = (props) => {
  const [count, setCount] = useState(1);
  const [updatedCount, setUpdatedCount] = useState(1); 

  const [bucketstate, setBucketstate] = useState('Add to Bucket');

  useEffect(() => {
    setCount(updatedCount); 
  }, [updatedCount]);

  const handleIncrement = () => {
    setUpdatedCount(updatedCount + 1); 
  };

  const handleDecrement = () => {
    if (updatedCount > 1) {
      setUpdatedCount(updatedCount - 1); 
    }
  };

  return (
    <div>
      <div className="item_container">
        <div className="item_details">
          <div className="item_image">
            <img alt="Delivery" src={props.item.image} class="image" />
          </div>
          <div className="item_desc">
            <h2 className="heading">{props.item.name}</h2>
            <h3>Description:</h3>
            <p>{props.item.desc}</p>
            <h2 className="heading">{props.item.price}</h2>

            <div className="items_Buttons">
              <button
                className="TopButton inc_dec"
                onClick={() => handleDecrement()}
                style={{ width: '10%' }}
              >
                <h2 className="heading ">-</h2>
              </button>

              <h3>{count}</h3>

              <button
                className="TopButton inc_dec"
                onClick={() => handleIncrement()}
                style={{ width: '10%' }}
              >
                <h2 className="heading">+</h2>
              </button>

              <button
                onClick={() => {
                  setBucketstate('Added');
                  props.pushToCart(props.item);
                }}
                className="TopButton addbucket_btn"
              >
                <h4 className="btn_h4" >Add to Cart</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBody;
