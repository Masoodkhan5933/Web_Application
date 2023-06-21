
import styles from '../ContactUs/ContactUs.module.css';
import img1 from './Homeimg1.png';
import img2 from './Homeimg2.png';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () =>{
    
    return(
<div>
    <body>
    <div className={styles.container}>
    
    <div className={styles.right}>
    
    <div className='Item'>
        <img src={img1} alt="" width="100%" height="65%"/>
       <Link to={'/bats'}><button className='item_button'>EXPLORE THE SHOES</button></Link> 
    </div>
    <div className='Item'>
        <img src={img2} alt="" width="100%" height="65%"/>
        <Link to={'/bats'}><button className='item_button'>EXPLORE THE BATS</button></Link> 
    </div>
    </div>
    </div>
    
    </body>

</div>
    );
}
export default Home;