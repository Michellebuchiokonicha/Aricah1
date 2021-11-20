import React from 'react'
import { Link } from 'react-router-dom'
import headerStyles from './HeaderStyle.module.css'
import logo from './logo.svg'
import searchIcon from './search.svg'

const HeaderSearch = () => {
    return (
        <nav className={headerStyles.init}>
            <Link to="/" className={headerStyles.lin}>
                <img src={logo} alt="logo"
                className={headerStyles.logo} />
                <span className={headerStyles.span}>Aricah</span>
            </Link>
            <Link to="/search">
                <img src={searchIcon} alt="search-icon"
                className={headerStyles.searchIcon} />
            </Link>
            <button className={headerStyles.toggle} type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarText"
               aria-controls="navbarText"
               aria-expanded="false"
               aria-label="Toggle navigation" >
                   <span className={headerStyles.navbarToggle}>
                       <span></span>
                       <span></span>
                       <span></span>
                   </span>
               </button>

               <div className={headerStyles.collapse} id="navbarText">
                   <ul className={headerStyles.navM}>
                       <li className={headerStyles.navItems}>
                           <Link to="/about" className={headerStyles.about}
                              role="button"
                              aria-expanded="false">
                                  <span className={headerStyles.item}>
                                      About Aricah
                                  </span>
                              </Link>
                       </li>
                       <li className={headerStyles.navItems}>
                           <Link to="/downloads" className={headerStyles.down}>
                               <span className={headerStyles.down}>Downloads</span>
                           </Link>
                       </li>
                       <li className={headerStyles.navItems}>
                           <Link to="/contact-us"
                             className={headerStyles.contact}
                             role="button"
                             aria-expanded="false">
                                 <span className={headerStyles.name}>
                                     Contact Us
                                 </span>
                            </Link>
                       </li>
                   </ul>

                   <ul className={headerStyles.sign}>
                       <li className={headerStyles.signIn}>
                           <Link className={headerStyles.navLink} to="/signup" >
                               <span>Sign up</span>
                           </Link>
                       </li>
                       <li className={headerStyles.navItems}>
                           <Link className={headerStyles.navLink} to="/login" 
                           role="button">
                               <span className="signin">Login</span>
                           </Link>
                       </li>
                   </ul>
                   <Link to="/search">
                       <img src={searchIcon}
                         alt="searchIcon"
                         className={headerStyles.icon} />
                   </Link>
               </div>
               <ul className={headerStyles.mine}>
                   <li className={headerStyles.navItems}>
                       <Link to="/signup">
                           <span className={headerStyles.signup}>Sign up</span>
                       </Link>
                   </li>
                   <li className={headerStyles.navItems}>
                       <Link to="/login">
                           <span className={headerStyles.signin}>
                               Login
                           </span>
                       </Link>
                   </li>
               </ul>
        </nav>
    );
}

export default HeaderSearch