import React from 'react';
// import girlpic from 'src/assets/casual-life-3d-girl-with-tablet-and-working-process-on-desktop.png';
// import redu from 'src/assets/casual-life-3d-remote-education (1).png';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home_body">
        <div className="circle"></div>
        <div className="hero-text">
          Learn from world class mentors with us AnyTime, Anywhere
        </div>
        <div className='girlcircle'></div>
          <div className='svg1girl'>
          <img src={process.env.PUBLIC_URL + '/girlpicstablet.png'} />
          </div>
        <div className="sub-hero-text">
        <img src={process.env.PUBLIC_URL + '/redu.png'} className="sub-hero-image"/>
          <span>
            Open a gate for Knowledge
            <br />
            We are just a click away!
          </span>
        </div>
        <div className="bottom">
          <button>Book a session</button>
          <span>
            <span className="material-symbols-outlined">play_circle</span>
            <span> play video </span>
          </span>
        </div>
        <div className="body_footer">
          <div>
            <AiFillInstagram className="icons" />
            <IoLogoWhatsapp className="icons" />
            <AiFillMail className="icons" />
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;
