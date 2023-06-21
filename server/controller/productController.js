import { productModel } from "../model/productModel.js"

const getProduct = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
}

const addProduct = async (req, res) => {
  console.log(req.body.name);

  const productname = req.body.name;
  const productdesc = req.body.description;
  const productimage = req.body.image;
  const productprice = parseFloat(req.body.price);
  const producttype = req.body.type;

  console.log(req.body);

  const newProduct = new productModel({
    name: productname,
    image: productimage,
    price: productprice,
    desc: productdesc,
    type: producttype,
  });

  try {
    await newProduct.save();
    res.json(newProduct);
  } catch (e) {
    console.log(e);
  }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
  
    try {
      // Find the product by ID and remove it
      await productModel.findByIdAndRemove(productId);
  
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  };

  const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    const { name, description, image, price, type } = req.body;
  
    try {
      // Find the product by ID and update its properties
      const updatedProduct = await productModel.findByIdAndUpdate(
        productId,
        {
          name,
          description,
          image,
          price,
          type
        },
        { new: true }
      );
  
      res.json(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update product' });
    }
  };
  

export { getProduct, addProduct, deleteProduct ,updateProduct };
