import { components, operations } from '@octokit/openapi-types/types';
import { Endpoints } from '@octokit/types';
import { RequestHeaders } from '@octokit/types/dist-types/RequestHeaders';

export type Repository = components['schemas']['repo-search-result-item'];

export type RepositorySearchData = Endpoints['GET /search/repositories']['response']['data'];
export type RepositorySearchArgs = operations['search/repos']['parameters']['query'];

export type RepositoryBranchesData = Endpoints['GET /repos/{owner}/{repo}/branches']['response']['data'];
export type RepositoryBranchesArgs = operations['repos/list-branches']['parameters']['path'];

export type RepositoryCommit = Endpoints['GET /repos/{owner}/{repo}/commits']['response']['data'][0];
export type RepositoryCommitsData = Endpoints['GET /repos/{owner}/{repo}/commits']['response']['data'];
export type RepositoryCommitsArgs = operations['repos/list-commits']['parameters']['path'] &
  operations['repos/list-commits']['parameters']['query'];

declare module '@reduxjs/toolkit/query/react' {
  export interface FetchArgs {
    headers?: RequestHeaders;
  }
}

export interface LinkHeaderEntry {
  page: string;
  per_page: string;
  rel: string;
  sha: string;
  url: string;
}

export interface ResponseWithLink<T> {
  response: T;
  next?: LinkHeaderEntry;
  last?: LinkHeaderEntry;
  prev?: LinkHeaderEntry;
  first?: LinkHeaderEntry;
}
