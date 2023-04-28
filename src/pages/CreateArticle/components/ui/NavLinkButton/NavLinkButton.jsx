/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.scss';

export const NavLinkButton = ({ text, onClick }) => (
  <div onClick={onClick} className="nav-link-button">
    {text}
  </div>
);
