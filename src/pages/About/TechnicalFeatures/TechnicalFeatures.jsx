import React from 'react';
import { Headlines } from '../../../components/Headlines';
import './styles.scss';

export const TechnicalFeatures = () => (
  <div className="technicalFeatures">
    <Headlines text="Технічні особливості" />
    <p>
      Вікіпедія використовує відкрите програмне забезпечення (open-source software) MediaWiki,
      подібне програмне забезпечення використовується не тільки в проєктах Вікімедіа (Wikimedia),
      але також на багатьох сторонніх вебосідках. Апаратна підтримка проєктів Вікімедіа базується на
      майже ста серверах у багатьох хостинг-центрах в різних країнах світу. Докладний опис цих
      серверів можна знайти тут — Технічний опис проєкту Wikipedia. Технічні, адміністративні і
      організаційні питання розглядаються в Кнайпі (технічні питання).
    </p>
  </div>
);