import { NavLink } from 'react-router-dom';
import './styles.scss';

export const FinalStage = () => (
  <div className="final-stage">
    <h1>Настройки завершені! Тепер ви можете створити свою статтю!</h1>
    <NavLink to="/create-article/constructor ">Створити статтю</NavLink>
  </div>
);
