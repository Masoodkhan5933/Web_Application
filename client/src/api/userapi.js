import axios from 'axios';

const getUsers = async () => {
  try {
    const res = await axios.get("http://localhost:5000/user");
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addUser = async (userData) => {
  try {
    console.log(userData)
    await axios.post("http://localhost:5000/user", userData);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    await axios.delete(`http://localhost:5000/user/${userId}`);
    console.log('User deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (userId, updatedUserData) => {
  try {
    await axios.put(`http://localhost:5000/user/${userId}`, updatedUserData);
    console.log('User updated successfully');
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, addUser, deleteUser, updateUser };
