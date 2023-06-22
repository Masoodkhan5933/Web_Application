
import { useNavigate } from 'react-router-dom';
import styles from './adminPage.module.css';

const SellerPage =()=>{

  const navigate = useNavigate();
  
    return (
      <div className={styles.container}>
        <h1>Admin Page</h1>
        <div className={styles.button_container}>
          <button className={styles.sell_btn} onClick={() => navigate("/delete")}>Manage Products</button>
          <button className={styles.delete_btn} onClick={()=>navigate("/deleteuser")}>Manage Users</button>
          
        </div>
      </div>
    );
}

export default SellerPage;
