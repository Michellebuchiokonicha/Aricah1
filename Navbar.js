import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css'


function Navbar() {
    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 80){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
          <nav className={`${styles.header} ${styles.active} ${navbar ? 'navbar active' : 'navbar'}`}>
              <div className={styles.container}>
                  <div className={`${styles.row} ${styles.justifyContent}`}>
                 <div className={styles.logo}>
                  <Link to='/'className={styles.guide}></Link>
                  <Link to='/' className={styles.guide}>Job spec</Link>
                  <Link to='/' className={styles.guide}>Candidate spec 
                          </Link>
                  <Link to='/' className={styles.guide}>career councellor</Link>
                 </div>
                  <div className={styles.ham}>
                     <Link to='/' className={styles.guide}>Sign in</Link>
                     <Link to='/' className={styles.guide}>Sign up</Link>
                     <button type={"submit"} className={`${styles.guide} ${styles.free}`}>Download for free</button>
                     <span></span>
                  </div>
                  </div>
              </div>
              
          </nav>
          
        </>
    );
}

export default Navbar