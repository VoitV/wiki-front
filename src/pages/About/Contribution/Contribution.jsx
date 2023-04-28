import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { Headlines } from '../../../components/Headlines';
import { HeadlinesSml } from '../../../components/HeadlinesSml';

export const Contribution = () => (
  <div className="contribution">
    <Headlines text="Внесок (дописування) у Вікіпедію" />
    <HeadlinesSml text="Редагування статей (сторінок) Вікіпедії" />
    <div className="em-link">
      <i>Вікіпедія:Довідка#Редагування</i>
    </div>
    <p>
      <b>Кожний може радагувати</b>, тобто може зробити внесок у Вікіпедію, натиснувши (клікнувши)
      закладку-посилання редагувати певної статті. Перед початком редагування чи створення статті
      варто ознайомитись із Вікіпедія:Правила і настанови, Довідка:Поради для новачків,
      Вікіпедія:Ласкаво просимо, політиками (настановами) Вікіпедії.
    </p>
    <p>
      Важливо усвідомлювати, що при дописуванні у Вікіпедію від користувачів очікується
      цивілізованість, етична поведінка (див. Вікіпедія:Етикет), відсутність релігійного чи іншого
      фанатизму, нейтральність, розгляд усіх поглядів, додання лише верифікованих (перевірених) та
      фактичних (а не фіктивних) даних, а не особистих поглядів чи думок. П'ять основ охоплюють цей
      підхід і їх рекомендовано перечитати, перш ніж приступити до редагування.
    </p>
    <HeadlinesSml text="Критерії вмісту Вікіпедії" />
    <p>
      Вікіпедійний вміст повинен відповідати критеріям фактичності, значущості, перевірюваності
      (верифіковуваності) зовнішніми посиланнями, неупередженого погляду (нейтральна точка зору),
      цитування зовнішніх джерел.
    </p>
    <p>Відповідні політики і настанови можна знайти в:</p>
    <ol>
      <li>
        <NavLink to="/">Вікіпедія:Чим не є Вікіпедія</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Жодних оригінальних досліджень</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Критерії значущості</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Верифіковуваність</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Нейтральна точка зору</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Посилання на джерела </NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Довідка#Стиль</NavLink>
      </li>
    </ol>
    <p>та в інших статтях з Категорія:Офіційні правила Вікіпедії.</p>
    <HeadlinesSml text="Редакційне адміністрування та наглядї" />
    <p>
      Вікіпедія є спільнотою зі значною самоорганізацією, спрямованою на те, щоб кожен міг
      створювати собі репутацію компетентного редактора і залучатися до будь-якої вибраної для себе
      ролі за умови схвалення членами відповідної групи. Користувачі часто обирають виконання
      спеціальних завдань, як-от: перегляд статей та запитів, виявлення вандалізму в нових
      редагуваннях, спостереження за якістю новостворених статей (див., наприклад,
      Вікіпедія:Патрулювання нових сторінок) і т. п. Користувачі, які вважають, що їх здібності
      дозволяють виконувати обов’язки адміністратора Вікіпедії і принесуть користь спільноті в такій
      ролі, можуть звернутися до спільноти за згодою отримати ці обов’язки і повноваження шляхом
      голосування (див. Вікіпедія:Адміністратори#Як стати адміністратором?); така система впроваджує
      меритократію (рівні стартові умови й ієрархічне положення в залежності від здібностей) і
      стандарти спільноти для редагування і управління. За статистикою, 75—80 % претендентів на
      повноваження адміністратора після обговорення спільнотою виявляються обґрунтовано відповідними
      на таку роль; ці стандарти дозволяють впевнитися у досвідченості претендентів, встановити
      серед користувачів атмосферу довіри, співробітництва, відкритості у всіх вікіпроєктах.
    </p>
    <p>
      Різноманітні програмні допоміжні системи, програмні інструменти та програми автоматизації
      (роботи або боти) допомагають кільком сотням редакторів спостерігати за проблемами редагувань
      і редакторів. Арбітражний комітет є найвищою інстанцією вирішення конфліктів і суперечок, які
      виникають при роботі над статтями. Його члени обираються і проходять регулярну ротацію.
      Обрання, прийняття рішень комітетом відбуваються за встановленими правилами, — все це дозволяє
      постійним дописувачам мати рівні права при вирішенні конфліктів і обранні в комітет.
    </p>
    <HeadlinesSml text="Вирішення суперечок і запобігання зловживанням" />
    <div className="em-link">
      <i>
        Вікіпедія:Вандалізм, Вікіпедія:Неприпустимість образ, погроз і агресії, Вікіпедія:Вирішення
        конфліктів, Вікіпедія:Поведінка в конфліктних ситуаціях, Вікіпедія:Консенсус, Знаходження
        консенсусу
      </i>
    </div>
    <p>
      Вікіпедія має достатню кількість методів для вирішення більшості конфліктів, пов'язаних з
      образами та зловживаннями. Ці методи добре протестовані і їм можна довіряти. Про навмисний
      вандалізм можна повідомити адміністраторів, особу, яка вчиняє вандалізм, за допомогою шаблону{' '}
      Вандал і вандалізм може бути скоректований будь-яким користувачем.
    </p>
    <HeadlinesSml text="Перевірка якості статей, редагувань" />
    <p>
      Поряд із системою виявлення й контролю невідповідних до стандартів і вандальських редагувань,
      у Вікіпедії є досить повні методики, правила й поради для неперервної перевірки і покращення
      статей. Процедури, що описані в Вікіпедія:Експертна оцінка, Вікіпедія:Кандидати у добрі
      статті, Вікіпедія:Вибрані статті, та строга перевірка статей впроваджують найвищі стандарти і
      забезпечують спроможність високоякісної роботи у Вікіпедії.
    </p>
    <p>
      Крім того, статті специфічних категорій часто мають власні спеціалізовані і широкоохоплюючі
      вікіпроєкти. Також є такі процедури перевірки, оцінки й покращення статей: Обговорення статей,
      Запити на коментар, Запит на рецензію, Статті, що необхідно поліпшити. Серед адміністраторів і
      користувачів є досвідчені рецензенти статей специфічних тем.
    </p>
  </div>
);
