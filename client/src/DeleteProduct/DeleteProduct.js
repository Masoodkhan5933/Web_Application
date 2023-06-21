import React, { useState, useEffect } from 'react';
import './DeleteProduct.css';
import { getProducts, deleteProduct, updateProduct } from '../api/product';

const DeletePage = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: '',
    name: '',
    image: '',
    desc: '',
    price: '',
  });
  const [updatePanelOpen, setUpdatePanelOpen] = useState(false);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const result = await getProducts();
    setData(result);
  };

  const handleRemoveItem = (itemId) => {
    deleteProduct(itemId);
  };

  const handleUpdateItem = (itemId) => {
    const selectedItem = data.find((item) => item._id === itemId);
    setUpdateData({
      id: selectedItem._id,
      name: selectedItem.name,
      image: selectedItem.image,
      desc: selectedItem.desc,
      price: selectedItem.price,
    });
    setUpdatePanelOpen(true);
  };

  const handleUpdateDataChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProduct = () => {
    console.log("updated")
    updateProduct(updateData.id, updateData);
    setUpdateData({
      id: '',
      name: '',
      image: '',
      desc: '',
      price: '',
    });
    setUpdatePanelOpen(false);
    getProductDetails();
  };

  return (
    <div>
      <div className="cart-page">
        <h2>ALL PRODUCTS</h2>
        <div className="item_details">
          {data.map((item) => (
            <div className="cart-item" key={item._id}>
              <img src={item.image} alt="pic" style={{ width: '50px' }} />
              <h3>{item.name}</h3>
              <p>Price: £{item.price}</p>
              <button onClick={() => handleRemoveItem(item._id)}>DELETE</button>
              <button onClick={() => handleUpdateItem(item._id)}>UPDATE</button>
            </div>
          ))}
        </div>
      </div>

      {updatePanelOpen && (
        <div className="update-panel">
          <h2>Update Product</h2>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={updateData.name}
            onChange={handleUpdateDataChange}
            placeholder="Product Name"
          />
          <label>Image Url</label>
          <input
            type="text"
            name="image"
            value={updateData.image}
            onChange={handleUpdateDataChange}
            placeholder="Image Link"
          />
          <label>Description:</label>
          <input
            type="text"
            name="desc"
            value={updateData.desc}
            onChange={handleUpdateDataChange}
            placeholder="Product Description"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={updateData.price}
            onChange={handleUpdateDataChange}
            placeholder="Product Price"
          />
          <button onClick={handleUpdateProduct}>Save</button>
        </div>
      )}
    </div>
  );
};

export default DeletePage;
