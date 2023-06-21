import styles from './ContactUs.module.css';

const Contactus = () =>{
    return(
        <div>
            <body>
    <div className={styles.container}>
    
        <section className={styles.right}>
        <h2 style={{color:"white"}}>HOW CAN WE HELP YOU?</h2>  
        <div class={styles.main_box}>
          
            <div className={styles.box}>
            <h4>LOCATIONS</h4>
            <p className={'$(styles.text) $({styles.center)'}> 1.Store Super Market, F 6 Sector Islamabad<br/><br/> 	2. Aabpara Market, G 6 1/3 Islamabad</p>
        </div>
        <div className={styles.box}>
            <h4>CANT FIND WHAT YOU ARE LOOKING FOR</h4>
            <p className='$(styles.text) $({styles.center)'>
            we’ll be glad to answer you in person. Email us anytime at customercare.pk@starsports.com. </p>
        </div>
         <div className={styles.box}>
            <h4>OUR TEAMS ARE HERE TO HELP DURING:</h4>
            <p>Monday - Saturday: 10:00am to 8:00pm <br/>If you’d like to write to us or acquire more information, drop us a line at the Locations</p>
        </div> 
        
        
        
    </div>
    <div className={styles.form}>
        <form action="">
            <div className="input1">
            <input type="text" placeholder="Enter Name"/>
            <input type="text" placeholder="Enter Email"/>
            <input type="text" placeholder="Phone Number"/>
            <input type="text" placeholder="Enter Reason"/>
            <input type="submit" value="SUBMIT" class={styles.submit_btn}/>
            </div>
        </form>
    </div>
    </section>
    </div>
</body> 
        </div>
    );
}
export default Contactus;