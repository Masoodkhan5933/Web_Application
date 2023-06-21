import React, { useState } from 'react';
import './addproduct.css';
import { AddProduct } from '../api/product';

function AddProductPage() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      name: productName,
      description: productDescription,
      image: productImage,
      price: productPrice,
      type: productType
    };

    try {
      await AddProduct(productData);
      setSuccessMessage('Product added successfully');
    } catch (error) {
      console.log(error);
      setSuccessMessage('Failed to add product');
    }
  };

  return (
    <div className='Body'>
      <form onSubmit={handleSubmit}>
        <h1>ADD A PRODUCT</h1>
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required /><br /><br />

        <label htmlFor="productDescription">Product Description:</label>
        <textarea id="productDescription" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required /><br /><br />

        <label htmlFor="productImage">Product Image Link:</label>
        <input type="text" id="productImage" value={productImage} onChange={(e) => setProductImage(e.target.value)} required /><br /><br />

        <label htmlFor="productPrice">Product Price:</label>
        <input type="text" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required /><br /><br />

        <label htmlFor="productType">Product Type:</label>
        <select id="productType" value={productType} onChange={(e) => setProductType(e.target.value)} required>
          <option value="">Select Type</option>
          <option value="bats">Cricket Bat</option>
          <option value="keeping">Wicket Keeping</option>
          <option value="protection">Protection</option>
          <option value="clothing">Clothing</option>
          <option value="shoes">Cricket Shoes</option>
        </select><br /><br />

        <button type="submit">Submit</button>
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default AddProductPage;
