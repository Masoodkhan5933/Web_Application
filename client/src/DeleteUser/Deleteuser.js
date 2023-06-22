import React, { useState, useEffect } from 'react';
import './Deleteuser.css';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUsers, updateUser } from '../api/userapi';

const DeleteUserPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: '',
    name: '',
    dob: '',
    email: '',
    password: '',
    role: '',
    usertype: '',
  });
  const [updatePanelOpen, setUpdatePanelOpen] = useState(false);

  useEffect(() => {
    getuserDetails();
  }, []);

  const getuserDetails = async () => {
    const result = await getUsers();
    setData(result);
  };

  const handleRemoveItem = (itemId) => {
    deleteUser(itemId);
    getuserDetails();
  };

  const handleUpdateItem = (itemId) => {
    const selectedItem = data.find((item) => item._id === itemId);
    setUpdateData({
      id: selectedItem._id,
      name: selectedItem.name,
      dob: selectedItem.dob,
      email: selectedItem.email,
      password: selectedItem.password,
      role: selectedItem.role,
      usertype: selectedItem.usertype,
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
    updateUser(updateData.id, updateData);
    setUpdateData({
      id: '',
      name: '',
      dob: '',
      email: '',
      password: '',
      role: '',
      usertype: '',
    });
    getuserDetails();
    setUpdatePanelOpen(false);
    
  };

  return (
    <div>
      <div className="cart-page">
        <h2>ALL USERS</h2>
        <div className="Headings">
          <h3>NAME</h3> 
          <h3>EMAIL</h3>
          <h3>ROLE</h3>
          <h3>TYPE</h3>
        </div>
        <div className="item_details">
          {data.map((item) => (
            item.usertype!=='admin'&&<div className="cart-item" key={item._id}>
              <h3>{item.name}</h3> 
              <h3>{item.email}</h3>
              <h3>{item.role}</h3>
              <h3>{item.usertype}</h3>
              <button onClick={() => handleRemoveItem(item._id)}>DELETE</button>
              <button onClick={() => handleUpdateItem(item._id)}>UPDATE</button>
            </div>
            
          ))}
        </div>
        <button onClick={() => navigate(-1)}>BACK</button>
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
          <label>Date of Birth</label>
          <input
            type="text"
            name="dob"
            value={updateData.dob}
            onChange={handleUpdateDataChange}
            placeholder="Date of Birth"
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={updateData.email}
            onChange={handleUpdateDataChange}
            placeholder="Email"
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={updateData.password}
            onChange={handleUpdateDataChange}
            placeholder="Password"
          />
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={updateData.role}
            onChange={handleUpdateDataChange}
            placeholder="Role"
          />
          <label>User Type</label>
          <input
            type="text"
            name="usertype"
            value={updateData.usertype}
            onChange={handleUpdateDataChange}
            placeholder="User Type"
          />
          <button onClick={handleUpdateProduct}>Save</button>
        </div>
      )}
    </div>
  );
};

export default DeleteUserPage;
