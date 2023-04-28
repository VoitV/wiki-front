import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const Introduction = () => (
  <div className="layaout-item">
    <div className="float-right">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Start-here.svg/240px-Start-here.svg.png"
        alt="/"
      />
    </div>
    <p>
      <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%A0%D0%BE%D0%B7%D0%BC%D1%96%D1%80_%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%97">
        Вікіпедія — це велике місце!
      </NavLink>
    </p>
    <p>
      Для початку варто зазначити, що станом на зараз в українській Вікіпедії <br /> налічується
      <b> 1 260 083</b> статті, і вона є найбільшою україномовною енциклопедією в історії, тоді як
      загалом уся Вікіпедія є{' '}
      <NavLink to="https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BA%D1%96%D0%BF%D0%B5%D0%B4%D1%96%D1%8F:%D0%A8%D0%B0%D1%84%D0%B0">
        найбільшою енциклопедією в історії людства.
      </NavLink>
    </p>
    <p>
      На додачу до цього є інші <b> 3.1 мільйона</b> сторінок, призначених підтримувати створення
      енциклопедії (а це у 2.5 разу більше, ніж статей)!
    </p>
    <p>
      Цей посібник допоможе Вам ознайомитись із деякими технічними засадами функціювання Вікіпедії,
      навчить Вас шукати те, що Вам потрібно, і познайомить із найважливішими сторінками.
    </p>
  </div>
);
