/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Headlines } from '../../components/Headlines';
import './styles.scss';
import { ItemsLayaout } from './ItemsLayaout';

const navItems = [
  {
    id: 'inctroduction',
    title: 'Вступ',
    subTitle: 'Навігація по Вікіпедії',
  },
  {
    id: 'names-types',
    title: 'Простори назв',
    subTitle: 'Різні типи сторінок',
  },
  {
    id: 'pages-search',
    title: 'Пошук сторінок',
    subTitle: 'Як відшукати те, що Вам потрібно',
  },
  {
    id: 'redirection',
    title: 'Перенаправлення і скорочення',
    subTitle: 'Перенаправлення трафіку',
  },
  {
    id: 'useful-links',
    title: 'Корисні посилання',
    subTitle: 'Сторінки, які можуть стати редакторам у нагоді',
  },
  {
    id: 'result',
    title: 'Підсумок',
    subTitle: 'Огляд того, чого Ви навчились',
  },
];

export const NavigationInfo = () => {
  const [selectedNavItemId, setSelectedNavItemId] = useState('inctroduction');

  const findSelectedNavItemIndex = () =>
    navItems.findIndex((navItem) => navItem.id === selectedNavItemId);

  const handleNavItemClick = (navItemId) => {
    setSelectedNavItemId(navItemId);
  };

  const onHandleNextClick = () => {
    const currentIndex = findSelectedNavItemIndex();
    const nextNavItem = navItems[currentIndex + 1];
    if (nextNavItem) {
      setSelectedNavItemId(nextNavItem.id);
    }
  };

  return (
    <div className="navigation-info">
      <Headlines text={`Довідка:Як орієнтуватися у Вікіпедії/${findSelectedNavItemIndex() + 1}`} />
      <div className="headline-bottom">
        <div>Матеріал з Вікіпедії — вільної енциклопедії..</div>
        <div>
          <NavLink to="/navigation">Довідка:Як орієнтуватися у Вікіпедії</NavLink>
        </div>
      </div>
      <nav className="navigation-container">
        <ul className="navigation-titles-list">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={`navigation-title-item ${
                navItem.id === selectedNavItemId ? 'active' : ''
              }`}
              onClick={() => handleNavItemClick(navItem.id)}
            >
              <h1>{navItem.title}</h1>
              <div>{navItem.subTitle}</div>
            </li>
          ))}
        </ul>
        <div className="navigation-item-layaout">
          <ItemsLayaout layaoutType={selectedNavItemId} />
          <div className="navigation-info-next-btn" onClick={onHandleNextClick}>
            <span>{'Далі>>'}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
