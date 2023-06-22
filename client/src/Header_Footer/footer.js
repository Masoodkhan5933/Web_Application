import './footer.css';
import logo from '../Home/logo.png';
import yt from './youtube.png';
import insta from './insta.png';
import fb from './fb.png';
import appstore from './appstore.png';
import playstore from './googleplay.png';

import { Link} from 'react-router-dom';

const Footer =()=>{
    return(
        <div>
            <div className='Container color'>
                <div className='logos color'>
                <Link to={'/home'}><img className='images' alt="logo" src={logo} style={{width:"100px"}}/></Link>
                <div className='findus'>
                    <h5>Find Us On</h5>
                    <div className='Images_top color'>
                    <img className='images' alt="logo" src={yt}/>
                    <img className='images' alt="logo" src={insta}/>
                    <img className='images' alt="logo" src={fb}/>
                    </div>
                </div>
                </div>
                <div className='sections color'>
                    <div className='column color'>
                    <h3 >Information</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Cricket Protection</li>
                            <li>Teamwear & Kits</li>
                            <li>Bat Repairs</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                    <div className='column color'>
                    <h3 >ORDERS</h3>
                        <ul>
                            <li>Delivery & Returns</li>
                            <li>help</li>
                        </ul>

                    </div>
                    <div className='column  color'>
                    <h3 >Get in Touch</h3>
                        <ul>
                            <li>Terms & conditions</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                    <div className='column color'>
                            <img src={appstore} alt="Facebook Icon" /><br/>
                            <img src={playstore} alt="Twitter Icon" />
                        

                    </div>
                </div>

            </div>
        </div>
    );
}
export default Footer;