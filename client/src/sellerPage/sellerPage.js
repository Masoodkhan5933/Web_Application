
import { useNavigate } from 'react-router-dom';
import styles from './SellerPage.module.css';

const SellerPage =()=>{

  const navigate = useNavigate();
    return (
      <div className={styles.container}>
        <h1>Seller Page</h1>
        <div className={styles.button_container}>
          <button className={styles.sell_btn} onClick={() => navigate("/delete")}>View Products</button>
          <button className={styles.delete_btn} onClick={navigate("/delete")}>Delete</button>
          <button className={styles.update_btn} onClick={navigate("/delete")}>Update</button>
          <button className={styles.add_product_btn} onClick={navigate("/addproduct")}>Add Product</button>
        </div>
      </div>
    );
}

export default SellerPage;
