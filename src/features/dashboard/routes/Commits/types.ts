import { RepositoryCommitsData } from '../../../../api/github/types';
import { PaginationParams } from '../../../../shared/types/types';

export type CommitsSearchFormValues = {
  branch: string;
} & Omit<PaginationParams, 'per_page'>;

export type CommitsRouteParams = {
  repositoryName: string;
};

export interface AggregatedCommitsEntry {
  date: string;
  commits: RepositoryCommitsData;
}

export type AggregatedCommitsData = AggregatedCommitsEntry[];
