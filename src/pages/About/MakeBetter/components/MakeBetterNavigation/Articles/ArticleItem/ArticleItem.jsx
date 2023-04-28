import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

export const ArticleItem = ({ text, img, link }) => (
  <NavLink to={link} className="link-article">
    <span className="item-img">
      <img src={img} alt="img" />
    </span>
    <span className="item-name">{text}</span>
  </NavLink>
);
