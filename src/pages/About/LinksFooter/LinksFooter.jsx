import React from 'react';
import { NavLink } from 'react-router-dom';
import { Headlines } from '../../../components/Headlines';
import './styles.scss';

export const LinksFooter = () => (
  <div className="link-footer">
    <Headlines text="Посилання" />
    <ul>
      <li>
        <NavLink to="https://www.wikipedia.org/">Wikipedia</NavLink> — багатомовний портал, який
        містить посилання на розділи Вікіпедії всіма мовами
      </li>
      <li>
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%AF%D0%BA_%D1%96_%D0%B4%D0%BB%D1%8F_%D1%87%D0%BE%D0%B3%D0%BE_%D0%BC%D0%B8_%D1%80%D0%BE%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%94%D0%BC%D0%BE_%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8E">
          Як і для чого ми розвиваємо Вікіпедію?
        </NavLink>
      </li>
      <li>
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F">
          Вікіпедія
        </NavLink>
      </li>
      <li>
        <NavLink to="https://meta.wikimedia.org/wiki/Wikimedia_servers">
          Технічний опис проєкту Wikipedia
        </NavLink>
        (hardware)
      </li>
    </ul>
  </div>
);
