import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
        <div className="logo">Logo</div>
        <nav>
            <ul>
                <li>About</li>
                <li>Pricing</li>
                <li>Review</li>

            </ul>
        </nav>

      
    </div>
  );
}

export default Navbar;
