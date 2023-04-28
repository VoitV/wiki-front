import React, { useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { NavLinkButton } from '../../ui/NavLinkButton';

export const SecondStage = ({ stageStep, updateStep }) => {
  const onHandleUpdate = () => {
    updateStep(stageStep + 1);
  };
  const [inputValue, setValue] = useState('');
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length <= 0) {
      return;
    }
    alert(inputValue);
    setValue('');
  };
  return (
    <div className="second-stage">
      <h1>Предмет уже описаний?</h1>
      <p>
        Наразі Вікіпедія містить 1 260 280 статей, які описують різноманітні об'єкти та явища. Аби
        ваша робота не була марною, переконайтесь, що предмет, яким ви цікавитесь, не описаний під
        іншими близькими варіантами назви. Якщо ви знайшли статтю під іншою назвою, можливо, варто
        створити{' '}
        <NavLink to="https://uk.wikipedia.org/wiki/%D0%94%D0%BE%D0%B2%D1%96%D0%B4%D0%BA%D0%B0:%D0%9F%D0%B5%D1%80%D0%B5%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F">
          перенаправлення
        </NavLink>
        .
      </p>
      <div className="search-form-container">
        <div className="form-before-alert">
          <span>
            Якщо ви досі не зробили цього, пошукайте тут можливі назви, а потім поверніться на
            сторінку.
          </span>
        </div>
        <form onSubmit={onHandleSubmit}>
          <input
            className="input-form"
            type="text"
            value={inputValue}
            onChange={inputChangeHandler}
          />
          <input className="submit-form" type="submit" value="Пошук" />
        </form>
      </div>
      <div className="second-stage-info-container">
        <div className="stage-info-left">
          <h1>Чи значущий предмет статті?</h1>
          <p>
            Однак відсутність статті не гарантує того, її предмет достатньо значущий для Вікіпедії.
            Спільнота виробила критерії значущості, які визначають відповідність статті цілям
            Вікіпедії. Перед створенням статті поміркуйте, чи буде мати цінність стаття через сто
            років? Чи могли б її надрукувати у{' '}
            <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0_%D1%80%D0%B0%D0%B4%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%B5%D0%BD%D1%86%D0%B8%D0%BA%D0%BB%D0%BE%D0%BF%D0%B5%D0%B4%D1%96%D1%8F">
              Великій радянській енциклопедії
            </NavLink>{' '}
            чи Британіці? Якщо відповідь позитивна, у більшості випадків стаття прийнятна і для
            Вікіпедії. У протилежному разі ознайомтесь із загальними критеріями значущості,
            прийнятими у Вікіпедії.
          </p>
          Будь ласка, <b>не пишіть статті про:</b>
          <ul>
            <li>
              себе (
              <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%9A%D0%BE%D0%BD%D1%84%D0%BB%D1%96%D0%BA%D1%82_%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%96%D0%B2">
                Чому?
              </NavLink>
              );
            </li>
            <li>своїх друзів;</li>
            <li>свій музичний гурт;</li>
            <li>свій вебсайт;</li>
            <li>свою компанію.</li>
          </ul>
          <p>Швидше за все, такі статті вилучать.</p>
        </div>
        <div className="stage-info-right">
          <div className="alret-container">
            <h1>Зверніть увагу</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Information.svg/90px-Information.svg.png"
              alt="/"
            />
            <b>Чи ви знаєте, що…</b>
            <p>
              статті, які не відповідають чинним у Вікіпедії вимогам, можуть «швидко» вилучатись.
              Якщо ви бажаєте уникнути цього, уважно виконайте підказки Майстра і напишіть якісну
              статтю.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="article-about-choise">
        <h1>Про що ви маєте намір написати?</h1>
        <NavLinkButton onClick={onHandleUpdate} text=">> Я пишу про організацію" link="*" />
        <NavLinkButton onClick={onHandleUpdate} text=">> >> Я пишу про себе" link="*" />
        <NavLinkButton onClick={onHandleUpdate} text=">> Я пишу про когось іншого" link="*" />
        <NavLinkButton onClick={onHandleUpdate} text=">> Я пишу про вебсайт" link="*" />
        <NavLinkButton onClick={onHandleUpdate} text=">> >> Я пишу про нове поняття" link="*" />
        <NavLinkButton
          onClick={onHandleUpdate}
          text=">> Я пишу про музику (музичний гурт, музиканта, співака, альбом або пісню)"
          link="*"
        />
        <NavLinkButton onClick={onHandleUpdate} text=">>  Я пишу про дещо інше" link="*" />
      </div>
    </div>
  );
};
