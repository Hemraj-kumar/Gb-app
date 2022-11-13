import React from 'react';
// import gblogo from 'src/assets/png_growbinar.png';
import '../styles/header.css';
// import logo from 'src/assets/Grow_Logo.jpg';

function Header() {
  return (
    <div className="home_header">
      <div className='girllogo'>
      <img src={process.env.PUBLIC_URL + '/Grow_Logo.jpg'} />
      </div>
      <div className="header_left">
          <div className='gb'>
          <img src={process.env.PUBLIC_URL + '/png_growbinar.png'} />
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
