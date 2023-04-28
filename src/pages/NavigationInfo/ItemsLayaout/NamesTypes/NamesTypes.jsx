import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const NamesTypes = () => (
  <div className="layaout-item">
    <p>
      Сторінки Вікіпедії діляться на{' '}
      <NavLink to="https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%B2%D1%96%D0%B4%D0%BA%D0%B0:%D0%9F%D1%80%D0%BE%D1%81%D1%82%D1%96%D1%80_%D0%BD%D0%B0%D0%B7%D0%B2">
        Простори назв
      </NavLink>
      . Кожен простір назв (окрім основного) має свою назву, яка додається до назви сторінки у формі
      префікса з двокрапкою.
    </p>
    <div className="table-container">
      <tbody className="table-name-types">
        <tr className="table-row-types">
          <th>Простір назв</th>
          <th>Призначення</th>
          <th>Приклади</th>
        </tr>
        <tr className="table-row-types">
          <td rowSpan="2">Основний/стаття</td>
          <td>Статті</td>
          <td>Плутон (карликова планета)</td>
        </tr>
        <tr className="table-row-types">
          <td>Статті</td>
          <td>Плутон (карликова планета)</td>
        </tr>
        <tr className="table-row-types">
          <td rowSpan="5">
            <b>Вікіпедія:</b> також відомий як «Project»
          </td>
          <td>Правила і настанови</td>
          <td>Вікіпедія:Нейтральна точка зору Вікіпедія:Стиль</td>
        </tr>
        <tr className="table-row-types">
          <td>Сторінки процедур</td>
          <td> Вікіпедія:Статті до поліпшення</td>
        </tr>
        <tr className="table-row-types">
          <td>Місця для обговорень і повідомлень</td>
          <td>Плутон (карликова планета)</td>
        </tr>
        <tr className="table-row-types">
          <td>Статті</td>
          <td>Вікіпедія:Кнайпа</td>
        </tr>
        <tr className="table-row-types" rowSpan="2">
          <td>Проєкти, створювані користувачами для координації роботи над конкретною тематикою</td>
          <tr className="table-row-types">
            <td>Вікіпедія:Проєкт:Історія</td>
            <td>Вікіпедія:Проєкт:Астрономія</td>
          </tr>
        </tr>
      </tbody>
    </div>
    <div className="footer-text">
      <p>
        Усі ці простори назв, окрім простору «Спеціальна:» мають відповідні сторінки обговорень, де
        можна, власне, обговорювати якісь питання, пов'язані з основними сторінками. Наприклад,
        статтю про Плутон (карликова планета) можна обговорювати на сторінці Обговорення:Плутон
        (карликова планета), а обговорювати правило Вікіпедія:Нейтральна точка зору можна на
        сторінці Обговорення Вікіпедії:Нейтральна точка зору. Перемикатися між основною сторінкою та
        сторінкою обговорення можна через вкладки вгорі зліва.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/%D0%9F%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F_%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83_%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F.png/300px-%D0%9F%D0%BE%D1%81%D0%B8%D0%BB%D0%B0%D0%BD%D0%BD%D1%8F_%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D1%83_%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F.png"
        alt="/"
      />
    </div>
  </div>
);
