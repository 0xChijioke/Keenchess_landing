import React from 'react';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">chess for an improved life</h1>
      <p className="typing__letter  p__opensans" style={{ margin: '2rem 0' }}>play and earn rewards!</p>
      <button type="button" className="animate__btn">
        <a href="#login">
          <span />
          <span />
          <span />
          <span />
          Register Now!
        </a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
