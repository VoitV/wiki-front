/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';

export const Header = () => (
  <div className="layaout-header">
    <div className="header-nav">
      <div className="nav-left">
        <NavLink to="/" className="nav-item nav-left-item">
          Головна
        </NavLink>
        <div className="nav-item nav-item-hide nav-left-item">Обговорення</div>
      </div>
      <div className="nav-right">
        <div className="nav-item nav-item-hide nav-right-item">Читати</div>
        <div className="nav-item nav-item-hide nav-right-item">Переглянути історію</div>
        <SearchInput />
      </div>
    </div>
  </div>
);
