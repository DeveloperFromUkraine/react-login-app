import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/nordpass.svg';

import './Header.scss';

const Header = () => {
 return (
   <div className="header">
     <div className="header-container">
       <div className="header-content-wrapper">
         <div className="header-logo-wrapper">
           <Link to="#">
             <img className="header-logo" src={Logo} alt="nord-test"/>
           </Link>
         </div>
         <div className="btn-wrapper">
           <Link to="#" className="btn">
             Sign In
           </Link>
         </div>
       </div>
     </div>
   </div>
  );
}

export { Header };
