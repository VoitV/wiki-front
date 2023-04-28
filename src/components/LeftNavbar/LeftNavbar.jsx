import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

export const LeftNavbar = () => (
  <aside className="navbar-left">
    <div className="navbar-logo">
      <NavLink to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png"
          alt="wiki"
        />
      </NavLink>
    </div>
    <div className="navbar-links">
      <div className="link-item">Головна сторінка</div>
      <div className="link-item">Випадкова стаття</div>
      <div className="link-item">Створити статтю</div>
    </div>
  </aside>
);
