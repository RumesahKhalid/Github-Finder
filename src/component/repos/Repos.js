import React from 'react';
import { RepoItem } from './RepoItem';

export const Repos = ({ repos }) =>
  repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
