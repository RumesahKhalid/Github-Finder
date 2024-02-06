import React, { useEffect, useContext } from 'react';
import { Spinner } from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Repos } from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

export const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    html_url,
    avatar_url,
    location,
    bio,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gist,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <>
      <Link to='/' className='btn btn-light br-2'>
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '150px' }}
            alt=''
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3> <p>{bio}</p>
            </>
          )}
          <a href={html_url} className='btn btn-primary my-1 br-2'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {login && (
                <>
                  <strong>Company: </strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {login && (
                <>
                  <strong>Blog: </strong>{' '}
                  <span className='text-success'>{blog}</span>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gist}</div>
      </div>
      <h1 className='my-2'>Latest Repos: </h1>
      <Repos repos={repos} />
    </>
  );
};
