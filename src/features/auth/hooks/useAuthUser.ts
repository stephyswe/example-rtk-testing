import { userApi } from '../../../api/user/api';
import { User } from '../../../api/user/types';

export const useAuthUser = (): User | undefined => {
  const state = userApi.endpoints.getUser.useQueryState(null);
  return state.data?.response;
};
