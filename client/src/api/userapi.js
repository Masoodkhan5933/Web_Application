import axios from 'axios';

const backendURL = 'https://starsports-cap10.onrender.com';

const getUsers = async () => {
  try {
    const res = await axios.get(`${backendURL}/user`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addUser = async (userData) => {
  try {
    console.log(userData)
    await axios.post(`${backendURL}/user`, userData);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (userId) => {
  try {
    await axios.delete(`${backendURL}/user${userId}`);
    console.log('User deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (userId, updatedUserData) => {
  try {
    await axios.put(`${backendURL}/user${userId}`, updatedUserData);
    console.log('User updated successfully');
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, addUser, deleteUser, updateUser };
