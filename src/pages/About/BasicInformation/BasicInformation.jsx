import React from 'react';
import { Headlines } from '../../../components/Headlines';
import { HeadlinesSml } from '../../../components/HeadlinesSml';
import './styles.scss';

export const BasicInformation = () => (
  <div className="basic-information">
    <Headlines text="Основні відомості про Вікіпедію" />
    <div className="information-history">
      <HeadlinesSml text="Історія Вікіпедії" />
      <div className="em-link">
        <i>Історія Вікіпедії та Вікіпедія:Історія української Вікіпедії</i>
      </div>
    </div>
    <div className="copyright">
      <div className="headline-text">Торгова марка і авторські права (копірайт)</div>
      <div className="em-link">
        <i>Вікіпедія:Авторське право</i>
      </div>
      <p>
        Вікіпедія є зареєстрованою торговою маркою неприбуткової Фундації Вікімедіа (Wikimedia
        Foundation), що створила низку вікіпроєктів.
      </p>
      <p>
        Внески-дописи у Вікіпедію є <b>добровільними</b> й здійснюються на основі ліцензії GNU Free
        Documentation License (GFDL) (див. також останню редакцію оригінального документу по
        посиланню внизу сторінки), що застосовує правові принципи, відомі як копілефт. Прецедент
        використання матеріалів, захищених авторським правом, контролюється та захищається з тією
        метою, щоб кожна особа завжди була вільною у доступі до інформації.
      </p>
      <p>
        <b>Усі відомості в Вікіпедії є вільні для кожного</b>, хто хоче копіювати, модифікувати її
        для власних цілей, здійснювати редистрибуцію чи використовувати так, як йому до вподоби,
        допоки нові версії не забезпечать тих самих можливостей. Визнанням для авторів статей
        Вікіпедії може бути цитування (з ласки) чи зворотне посилання на оригінальну статтю, якого
        має бути достатньо для цього. Докладніші відомості містять вказані вище статті Авторське
        право та текст GNU Free Documentation License
      </p>
    </div>
  </div>
);
