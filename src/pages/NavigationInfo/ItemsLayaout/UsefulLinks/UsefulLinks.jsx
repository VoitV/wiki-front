import React from 'react';
import './styles.scss';

export const UsefulLinks = () => (
  <div className="layaout-item">
    <div className="useful-links">
      <h1>Угорі</h1>
      <p>
        Якщо Ви зареєструвалися й увійшли в систему, то можете бачити деякі корисні посилання вгорі
        справа свого екрану:
      </p>
      <ul>
        <li>
          Ваше ім'я користувача приведе Вас на Вашу сторінку користувача, де Ви можете додати якусь
          інформацію про себе.
        </li>
        <li>
          Обговорення — це Ваша персональна сторінка обговорення, на якій інші користувачі зможуть
          залишати Вам повідомлення.
        </li>
        <li>
          Чернетка — Ваша персональна чернетка, де Ви можете зберігати якусь корисну інформацію,
          готувати нові статті до публікації, експериментувати з вікірозміткою тощо.
        </li>
        <li>
          Налаштування дають змогу змінити Ваш пароль, додати чи змінити електронну адресу (як і
          вибрати, які листи Ви хочете на неї отримувати), а також налаштувати вигляд інтерфейсу
          Вікіпедії.
        </li>
        <li>
          Список спостереження показує останні зміни на сторінках, за якими Ви спостерігаєте
          (клацніть на зірочці вгорі справа, щоб додати сторінку до свого списку спостереження)
        </li>
        <li>Внесок містить список усіх зроблених Вами редагувань</li>
        <li>Вийти — посилання, яке дозволить Вам вийти із системи</li>
      </ul>
      <h1>Зліва</h1>
      <div className="useful-links-layaout-centre">
        <div>
          <p>
            Зліва кожної сторінки, на бічній панелі, є додатковий набір корисних посилань, серед
            яких:
          </p>
          <ul>
            <li>Посилання сюди — показує, які інші сторінки посилаються на поточну</li>
            <li>
              Пов'язані редагування — перелічує будь-які редагування, зроблені на сторінках, на які
              посилається поточна сторінка
            </li>
            <li>Довідка — це відправна точка для довідкових сторінок Вікіпедії</li>
            <li>
              Портал спільноти містить інформацію про те, де Ви можете отримати допомогу, а також
              про проєкти, до яких Ви можете приєднатись
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edit-copy.svg/240px-Edit-copy.svg.png"
            alt="/"
          />
        </div>
      </div>
      <h1>Є ще більше корисних посилань</h1>
      <p>Є кілька важливих сторінок у Вікіпедії, про які справді корисно знати:</p>
      <ul>
        <li>
          Вікіпедія:Кнайпа — це набір централізованих сторінок обговорень за певними тематичними
          категоріями (пропозиції, політики, авторське право, технічні питання, адміністрування,
          патрулювання, мовні питання, допомога і, зрештою, різне)
        </li>
        <li>Запитання можна ставити на сторінці Вікіпедія:Кнайпа (допомога)</li>
        <li>
          Віківісник — інформаційний вісник, який щомісяця пишуть редактори Вікіпедії з метою
          підсумування ключових віх у розвитку Вікіпедії (знайдіть поточний рік і виберіть поточний
          місяць, щоб переглянути останній випуск)
        </li>
        <li>
          Вікіпедія:Запити до адміністраторів — сторінка для запитів до адміністраторів, куди можна
          звертатись, коли потрібна допомога когось із розширеними технічними правами
        </li>
      </ul>
    </div>
  </div>
);
