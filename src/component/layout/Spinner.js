import React from 'react';
import spinner from './spinner.gif';

export const Spinner = () => {
  return (
    <>
      <img src={spinner} alt='Loading' style={styling} />
    </>
  );
};

const styling = {
  width: '80px',
  margin: 'auto',
  display: 'block',
};
