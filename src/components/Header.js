import React from 'react';
import gblogo from '/home/hacks_348/Desktop/gb-app/src/assets/png_growbinar.png';
import '../styles/header.css';
import logo from '/home/hacks_348/Desktop/gb-app/src/assets/Grow_Logo.jpg';

function Header() {
  return (
    <div className="home_header">
      <div className='girllogo'>
        <img src={logo} alt="logo-error"/>
      </div>
      <div className="header_left">
          <div className='gb'>
            <img src={gblogo} alt="gb-error"/>
          </div>
      </div>

      <ul className="">
        <li>
          <a>
            <strong>Home</strong>
            <hr />
          </a>
        </li>
        <li>
          <a>
            <strong>Features</strong>
            <hr />
          </a>
        </li>
        <li>
          <a>
            <strong>Contact</strong>
            <hr />
          </a>
        </li>
        <li>
          <a>
            <strong>About Us</strong>
            <hr />
          </a>
        </li>
      </ul>

      <div className="header_right">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Header;
