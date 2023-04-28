/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const ContentsNav = () => {
  const [isClosed, closeContents] = useState(false);
  const handleHide = () => {
    closeContents(!isClosed);
  };
  if (isClosed) {
    return (
      <div className="contents">
        <div className="contents-container">
          <div className="contents-top">
            <span className="top-text">Зміст</span>[<span onClick={handleHide}>сховати</span>]
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="contents">
      <div className="contents-container">
        <div className="contents-top">
          <span className="top-text">Зміст</span>[<span onClick={handleHide}>сховати</span>]
        </div>

        <div className={isClosed ? 'contents-list closed' : 'contents-list'}>
          <ol>
            <li className="contents-list-item">
              <NavLink to="/"> Вступ </NavLink>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Основні відомості про Вікіпедію</NavLink>
              <ol>
                <li className="contents-list-item">
                  <NavLink to="/">Історія Вікіпедії</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Торгова марка і авторські права (копірайт)</NavLink>
                </li>
              </ol>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Зробімо Вікіпедію і користування нею кращими</NavLink>
              <ol>
                <li className="contents-list-item">
                  <NavLink to="/">Гортання Вікіпедії</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Основи навігації у Вікіпедії</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Використання Вікіпедії як дослідницького інструментарію </NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Чим Вікіпедія відрізняється від паперової енциклопедії</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Переваги, недоліки та якість статей Вікіпедії </NavLink>
                  <ol>
                    <li className="contents-list-item">
                      <NavLink to="/">Головні переваги</NavLink>
                    </li>
                    <li className="contents-list-item">
                      <NavLink to="/">Головні слабкості</NavLink>
                    </li>
                    <li className="contents-list-item">
                      <NavLink to="/">Якість інформації</NavLink>
                    </li>
                    <li className="contents-list-item">
                      <NavLink to="/">Відповіді на критику Вікіпедії</NavLink>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Внесок (дописування) у Вікіпедію </NavLink>
              <ol>
                <li className="contents-list-item">
                  <NavLink to="/">Редагування статей (сторінок) Вікіпедії</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Критерії вмісту Вікіпедії</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Редакційне адміністрування та нагляд</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Вирішення суперечок і запобігання зловживанням</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Перевірка якості статей, редагувань</NavLink>
                </li>
              </ol>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Технічні особливості</NavLink>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Зворотний звязок і запитання</NavLink>
              <ol>
                <li className="contents-list-item">
                  <NavLink to="/">Поширені питання (ПОП), часті питання (ЧАП), FAQ</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Повідомлення зворотного звязку</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Віднаходження допомоги і подібні питання</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Обговорення в спільноті</NavLink>
                </li>
                <li className="contents-list-item">
                  <NavLink to="/">Індивідуальні контакти з дописувачами Вікіпедії</NavLink>
                </li>
              </ol>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Вікіпедія іншими мовами</NavLink>
            </li>
            <li className="contents-list-item">
              <NavLink to="/">Посилання</NavLink>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
