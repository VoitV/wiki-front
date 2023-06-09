import { NavLinkButton } from '../../ui/NavLinkButton';
import './styles.scss';
import './adaptive.scss';

export const FourthStage = ({ stageStep, updateStep }) => {
  const onHandleUpdate = () => {
    updateStep(stageStep + 1);
  };
  return (
    <div className="fourth-stage">
      <div className="fourth-stage-content">
        <div className="content-container">
          <div className="container-left-part">
            <b>Інформація у Вікіпедії має бути достовірною.</b>
            <br />
            <p>
              Факти, точки зору, теорії й аргументи варто включати до статей, лише якщо вони були
              раніше опубліковані в авторитетних і надійних джерелах. Джерела мають бути незалежними
              від об'єкта й точними. Посилання на джерела — одна з ключових засад Вікіпедії.
              Будь-який матеріал без джерел можна поставити під сумнів і вилучити з Вікіпедії.
            </p>
            <br />
            <p>
              Зауважте: статті <it>Вікіпедії не є авторитетними джерелами</it> (хоча ви можете
              скопіювати відповідні джерела з інших статей).
            </p>
            <br />
            <b>Хороші джерела:</b>
            <br />
            <ol>
              <li>Мають добру репутацію і є авторитетними.</li>
              <li>Ніяк не афілійовані з предметом статті.</li>
              <li>Є такими, які можливо перевірити.</li>
            </ol>
            <b>
              Якщо ваша стаття не підкріплена авторитетними, незалежними джерелами, вона може бути
              вилучена.
            </b>
          </div>
          <div className="container-right-part">
            <div className="table-info">
              <b>Приклади джерел</b>
              <br />
              <b>Хороші джерела:</b>
              <ul>
                <li>Книги</li>
                <li>Газети</li>
                <li>Наукові журнали</li>
                <li>Авторитетні часописи</li>
              </ul>
              <b>Погані джерела:</b>
              <ul>
                <li>Блоги</li>
                <li>Шкільні реферати</li>
                <li>Соціальні мережі</li>
                <li>«Особисті знання»</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <h1>Ваша стаття підкріплена джерелами?</h1>
        <NavLinkButton
          onClick={onHandleUpdate}
          text=">> Моя стаття підкріплена хорошими джерелами"
        />
        <NavLinkButton
          onClick={onHandleUpdate}
          text=">> Моя стаття не підкріплена хорошими джерелами (поки що)"
        />
      </div>
    </div>
  );
};
