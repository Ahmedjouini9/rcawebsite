import React from 'react';
import people from '../../assets/people.png';
import rca from '../../assets/combiné.png';
import './header.css';

const Header = () => (
  <div className="container">
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">VOTRE VISIBILITÉ VOTRE RÉFÉRENCEMENT</h1>
        <p>Find the perfect job</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Search" />
          <button type="button">Search</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt=""/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={rca} alt=""/>
      </div>
    </div>
  </div>
);

export default Header;
