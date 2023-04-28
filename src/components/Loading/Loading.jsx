import React, { useState } from 'react';
import { Audio } from 'react-loader-spinner';
import './styles.scss';

// eslint-disable-next-line consistent-return
export const Loading = ({ isLoading }) => {
  const arr = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
  const [index, setIndex] = useState(0);
  const loadingText = arr[index];
  const changeText = () => {
    const int = setInterval(() => {
      if (index > arr.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
    return () => clearInterval(int);
  };
  if (isLoading) {
    return (
      <div className="loading">
        <Audio height="80" width="80" radius="9" color="black" ariaLabel="loading" />
        {changeText()}
        <span>{loadingText}</span>
      </div>
    );
  }
};
