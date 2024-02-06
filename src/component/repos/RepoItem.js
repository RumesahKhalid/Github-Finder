import React from 'react';

export const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <div className='li-flex'>
        <h3 style={{ letterSpacing: '1px' }}>{repo.name}</h3>
        {/* <div className='badge badge-dark'>Watchers: {repo.watchers}</div>
        <div className='badge badge-dark'>Forks: {repo.forks}</div> */}
        <a
          target='_blank'
          href={repo.html_url}
          rel='noopener noreferrer'
          className='btn btn-success br-2'
        >
          Visit
        </a>
      </div>
    </div>
  );
};
