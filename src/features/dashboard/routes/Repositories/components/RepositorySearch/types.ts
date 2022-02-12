import { RepositoryVisibilityEnum } from '../../../../../../api/github/enums';
import { RepositorySearchArgs } from '../../../../../../api/github/types';

export type RepositorySearchFormValues = {
  name: string;
  type: RepositoryVisibilityEnum;
} & Required<Pick<RepositorySearchArgs, 'sort' | 'per_page' | 'page'>>;
