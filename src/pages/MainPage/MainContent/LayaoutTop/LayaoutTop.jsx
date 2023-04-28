import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

export const LayaoutTop = () => (
  <div className="layaout-top">
    <div className="layaot-top-header">
      <div className="left-text">
        <span>Ласкаво просимо до Вікіпедії,{'\n'}</span>
        вільної енциклопедії, яку може редагувати кожен.{'\n'}
        Українська Вікіпедія заснована 30 січня 2004 року.&#10;
      </div>
      <div className="right-text">
        п'ятниця, 14 квітня 2023 року{'\n'}1 258 585 статей українською{'\n'}
        159 612 зареєстрованих дописувачів{'\n'}
        4094 з них активні останнього місяця{'\n'}
      </div>
    </div>
    <div className="content-nav">
      <div className="nav-item">
        <NavLink to="/about">Про нас</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/navigation">Навігація</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D1%82%D0%B0%D0%BB:%D0%92%D0%BC%D1%96%D1%81%D1%82">
          Зміст
        </NavLink>
      </div>
      <div className="nav-item item-big">
        <NavLink to="/create-article">Створити статтю</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%B2%D1%96%D0%B4%D0%BA%D0%B0:%D0%A0%D0%B5%D1%94%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F">
          {' '}
          Реєстрація
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%94%D0%BE%D0%B2%D1%96%D0%B4%D0%BA%D0%B0">
          Довідка
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%92%D1%96%D0%BA%D1%96%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82">
          Проєкти
        </NavLink>
      </div>
    </div>
  </div>
);
