import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='all-center my-3'>
      <h1>Not Found!! :(</h1>
      <p className='lead'>The page you are looking for does not exist...</p>
      <Link to='/' className='btn btn-primary'>
        Back to Home
      </Link>
    </div>
  );
};
