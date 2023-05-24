/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Headlines } from '../../../../../components/Headlines';
import { NavLinkButton } from '../../ui/NavLinkButton';
import './styles.scss';
import './adaptive.scss';

export const FirstStage = ({ stageStep, updateStep }) => {
  const onHandleUpdate = () => {
    updateStep(stageStep + 1);
  };
  return (
    <div className="first-stage">
      <p>
        <b>Вітаємо у Майстрі створення статей!</b> Пройшовши чотири кроки, Ви дістанетеся сторінки
        редагування нової статті. Кожен наступний крок стане доступним після виконання попереднього.
      </p>
      <br />
      <div className="layaout-contnent-centre">
        <div className="centre-left-part">
          <b>Якщо ви не зареєстровані</b>
          <p>
            Реєстрація полегшить спілкування з іншими учасниками і зніме ряд технічних обмежень
            (детальніше).
          </p>
          <div className="register-link">
            <NavLink to="/">Зарєструватися</NavLink>
            <div>і повернутися сюди</div>
          </div>
          <br />
          <b>Ви вже готові створити нову статтю?</b>
          <NavLinkButton onClick={onHandleUpdate} text=">> Запустити Майстер" />
          <NavLink to="/create-article/constructor">{'>> Пропустити'}</NavLink>
        </div>
        <div className="centre-right-part">
          <div className="info-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Information.svg/80px-Information.svg.png"
              alt="/"
            />
          </div>
          <div className="info-text">
            <b>Дуже рекомендуємо</b>, особливо якщо це ваша перша стаття у Вікіпедії, ознайомтесь із
            порадою{' '}
            <NavLink to="https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%B2%D1%96%D0%B4%D0%BA%D0%B0:%D0%AF%D0%BA_%D1%80%D0%B5%D0%B4%D0%B0%D0%B3%D1%83%D0%B2%D0%B0%D1%82%D0%B8_%D1%81%D1%82%D0%B0%D1%82%D1%82%D1%8E">
              Як редагувати статтю
            </NavLink>
            . Ми дбаємо про те, щоб статті у Вікіпедії були точними, тому некоректно оформлені
            статті без джерел часто вилучаються. Вивчення деяких основ підвищить якість вашої
            статті.
          </div>
        </div>
      </div>
      <Headlines text="Див. також" />
      <div className="also-view-list">
        <ul>
          <li>Вікіпедія:Шпаргалка</li>
          <li>Довідка:Створення нової статті</li>
          <li>Вікіпедія:Додатки/Wikilinker</li>
          <li>Довідка:Як редагувати статтю</li>
          <li>Вікіпедія:Стиль</li>
        </ul>
      </div>
    </div>
  );
};
