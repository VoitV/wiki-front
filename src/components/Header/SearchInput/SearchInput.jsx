import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { fetchArticlesBySearch } from '../../../api';
import './styles.scss';

export const SearchInput = () => {
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const onHandleInput = async (e) => {
    setInputText(e?.target?.value);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (inputText === '') {
      setSearchResult([]);
    } else {
      const getData = setTimeout(() => {
        const handleSearch = async () => {
          const res = await fetchArticlesBySearch(inputText);
          setSearchResult(res);
        };
        handleSearch();
      }, 500);
      return () => clearTimeout(getData);
    }
  }, [inputText]);

  const onHandleClick = () => {
    setInputText('');
    setSearchResult([]);
  };

  return (
    <form className="input-search-form">
      <input
        onChange={onHandleInput}
        type="text"
        name="search"
        value={inputText}
        placeholder="Введіть щось аби знайти..."
      />
      <span className="font-icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <div className={searchResult.length <= 0 ? 'search-result-disabled' : 'search-result'}>
        {searchResult.map((el) => (
          <NavLink
            onClick={onHandleClick}
            to={`/article/${el.id}`}
            key={el.id}
            className="search-resul-item"
          >
            {el.articletitle}
          </NavLink>
        ))}
      </div>
    </form>
  );
};
