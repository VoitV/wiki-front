/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headlines } from '../../../../components/Headlines';
import { fetchArticlesPost } from '../../../../api';
import './styles.scss';
import { EditorTest } from './editor/EditorTest';

export const CreateArticleConstructor = () => {
  const [titleInputValue, setTitleInputValue] = useState('');
  const [mainTextInputValue, setMainTextInputValue] = useState('');
  const optionRef = useRef();
  const navigate = useNavigate();

  const inputTitleChangeHandler = (e) => {
    setTitleInputValue(e.target.value);
  };
  const onHadleSubmit = async () => {
    const optionValue = optionRef.current.value;
    if (titleInputValue.length <= 0 || mainTextInputValue.length <= 0) {
      const alert = document.getElementsByClassName('alert-required')[0];
      alert.classList.add('show');
      setTimeout(() => {
        alert.classList.remove('show');
      }, 3000);
    } else {
      const article = {
        articleTitle: titleInputValue,
        articleContent: mainTextInputValue,
        articleType: optionValue,
      };
      console.log(article);
      await fetchArticlesPost(article);
      navigate('/');
    }
  };
  return (
    <div className="create-aticle-contructor">
      <div className="alert-required">
        <div className="required-content">Одне з полів не є заповненним!</div>
      </div>
      <div className="contructor-header">
        <Headlines text="Вітаємо в консрукторі статей" />
      </div>
      <div className="constructor-layaout">
        <div className="layaout-create-article-title-container">
          <form className="atricle-title-form">
            <span>
              <h1>Придумайте назву статі</h1>
            </span>
            <input
              className="title-create-input"
              type="text"
              name="tile"
              value={titleInputValue}
              onChange={inputTitleChangeHandler}
              required
            />
          </form>
        </div>
        <div className="article-type-option">
          <h1>Виберіть тип статті</h1>
          <select name="select-title" ref={optionRef}>
            <option value="organization">Про організацію</option>
            <option value="aboutMe">Про себе</option>
            <option value="aboutElse">Про іншу людину</option>
            <option value="website">Про вебсайт</option>
            <option value="newConcept">Про нове поняття</option>
            <option value="abouArt">Про мистецтво</option>
            <option value="else">Дещо інше</option>
          </select>
        </div>
        <div className="layaout-create-atricle-main-text">
          <div className="atricle-main-text-container">
            <form className="atricle-main-text-form">
              <span>
                <h1>Пишіть вашу статю тут:</h1>
              </span>
              <EditorTest text={mainTextInputValue} setMainText={setMainTextInputValue} />
            </form>
          </div>
        </div>
        <div />
        <div className="submit-button">
          <div className="submit-button-container">
            <button onClick={onHadleSubmit} type="submit">
              Опублікувати
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
