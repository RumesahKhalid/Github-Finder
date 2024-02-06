import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '70px' }}
        />
        <h3 style={{ letterSpacing: '1px' }}>{login}</h3>
        <div>
          <Link
            to={`/user/${login}`}
            className='btn btn-primary btn-sm my-1'
            style={{ borderRadius: '5px' }}
          >
            More
          </Link>
        </div>
      </div>
    </>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};
