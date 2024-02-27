import axios from 'axios';

const backendURL = 'https://starsports-cap10.onrender.com'; // Replace this with your actual backend URL

const getProducts = async () => {
  try {
    const res = await axios.get(`${backendURL}/product`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const AddProduct = async (productData) => {
  try {
    await axios.post(`${backendURL}/product`, productData);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${backendURL}/product/${productId}`);
    console.log('Product deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (productId, updatedProductData) => {
  try {
    await axios.put(`${backendURL}/product/${productId}`, updatedProductData);
    console.log('Product updated successfully');
  } catch (error) {
    console.log(error);
  }
};


export {AddProduct,getProducts,deleteProduct,updateProduct}


