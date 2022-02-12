import { faker } from '@faker-js/faker';
import { User } from '../../../api/user/types';

export const userMockApiData = {
  user: {
    login: faker.internet.userName()
  } as User
};
