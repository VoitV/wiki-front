import React from 'react';
import { NavLink } from 'react-router-dom';
import { Headlines } from '../../../components/Headlines';
import { HeadlinesSml } from '../../../components/HeadlinesSml';
import './styles.scss';

export const Feedback = () => (
  <div className="feedback">
    <Headlines text="Зворотний зв'язок і запитання" />
    <p>
      Вікіпедія розвивається завдяки спільним зусиллям користувачів. Це проєкт, який здійснюється
      спільнотою Вікіпедії, результатом якого є енциклопедія. Зворотній зв'язок про вміст Вікіпедії
      насамперед виникає на сторінках обговорення статей. Спільнота заохочує учасників бути
      рішучими, створювати чи редагувати статті, додавати інформацію чи виправляти помилки, якщо
      учасник (користувач) володіє відповідними знаннями.
    </p>
    <HeadlinesSml text="Поширені питання (ПОП), часті питання (ЧАП), FAQ" />
    <p>
      З питаннями і проханнями про допомогу користувачі можуть звертатися до інших користувачів і
      адміністраторів за допомогою сторінок:
    </p>
    <ul>
      <li>
        <NavLink to="/">Вікіпедія:Поширені питання</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Кнайпа</NavLink>
      </li>
    </ul>
    <HeadlinesSml text="Повідомлення зворотного зв'язку" />
    <p>
      У Вікіпедії загальноприйняті процедури загострення уваги і проведення дискусій допомагають
      здійснити спеціально розроблені сторінки для запитань, зворотного зв’язку, пропозицій і
      коментарів:
    </p>
    <ul>
      <li>
        <NavLink to="/">Сторінка обговорення </NavLink> — спеціальна сторінка, асоційована зі
        статтею для дискусій стосовно її змісту. Використання сторінок обговорення рекомендується як
        перший крок вирішення конфліктів.
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Вандалізм</NavLink> — можливість повідомити про вандалізм. Ви
        допоможете запобігти вандалізму, негайно повідомивши про нього.
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Вирішення конфліктів</NavLink> — процедура керування дискусією,
        виходу з конфлікту, який залишився невирішеним на сторінці обговорення статті.
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Кнайпа</NavLink> — дискусійний майданчик Вікіпедії, складова
        частина порталу спільноти.
      </li>
      <li>
        <NavLink to="/">Довідка:Повідомлення іншим.</NavLink>
      </li>
    </ul>
    <HeadlinesSml text="Віднаходження допомоги і подібні питання" />
    <p>Користувачі мають змогу знайти відповіді на певні теми в:</p>
    <ul>
      <li>
        <NavLink to="/">Вікіпедія:Запити на статті </NavLink> — де можна запропонувати або попрохати
        створити нову статтю або шаблон, а також у згадуваних вже:
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Кнайпа</NavLink>
      </li>
      <li>
        <NavLink to="/">Вікіпедія:Довідка</NavLink>
      </li>
    </ul>
    <p>
      Характерною ознакою Вікіпедії є те, що вона заохочує людей шукати інформацію насамперед у ній,
      але також і в першоджерелах чи інших джерелах, зазначених у посиланнях. Однак, якщо ви
      наштовхнетесь на достовірну, варту уваги інформацію, якої нема у Вікіпедії, будьте рішучими,
      додайте цю інформацію чи посилання на неї, щоб інші могли скористатися знайденою вами
      інформацією.
    </p>
    <HeadlinesSml text="Обговорення в спільноті" />
    <p>
      Для обговорення специфічних питань, не пов'язаних безпосередньо зі змістом статей чи
      управлінням редагуваннями, користувачам слід звертатись до сторінки проєкту Експертна оцінка
      або до Кнайпи, яка містить розділи: пропозиції, політики, технічні питання, допомога, різне.
      Посилання на ці розділи зведені в таблицю (яка фактично є шаблоном). Портал спільноти є
      централізованим місцем, де можна знайти: інформацію як ви можете допомогти Вікіпедії,
      довідкову інформацію з використання і покращення Вікіпедії, пропозиції зі співпраці; зробити
      запит на допомогу, зробити загальні оголошення.
    </p>
    <HeadlinesSml text="Індивідуальні контакти з дописувачами Вікіпедії" />
    <p>
      Перш ніж звернутися з питанням до конкретного користувача (дописувача), пошукайте відповідь у
      Вікіпедія:Довідка. Для контакту з певним користувачем залишіть йому повідомлення на його
      сторінці обговорення. Користувачі можуть спілкуватися режимі онлайн (в режимі реального часу)
      в Кнайпі та IRC чи в офлайні — електронною поштою Вікіпедії. Скористатися електронною поштою
      Вікіпедії можна натиснувши посилання Надіслати листа цьому користувачеві на панелі
      інструментів у лівій колонці сторінки (чи її закладок) конкретного користувача (при
      стандартних налаштуваннях).
    </p>
  </div>
);
