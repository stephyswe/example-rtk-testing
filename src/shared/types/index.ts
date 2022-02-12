import { components } from '@octokit/openapi-types/types';

export type PaginationParams = Pick<components['parameters'], 'per-page' | 'page'>;
