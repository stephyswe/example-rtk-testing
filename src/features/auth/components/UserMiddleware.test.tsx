import { act, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setAuthToken } from '../../../../test/store/setAuthToken';
import { userMockApiHandlers } from '../../../mocks/github/user/handlers';
import { store } from '../../../shared/redux/store';
import UserMiddleware from './UserMiddleware';

const arrange = () => {
  const apiSpy = jest.spyOn(userMockApiHandlers, 'getUser');

  render(
    <Provider store={store}>
      <UserMiddleware>CONTENT</UserMiddleware>
    </Provider>
  );

  return { apiSpy };
};

describe('Component/UserMiddleware', () => {
  it('should try to load user and render content without user', async () => {
    await act(async () => {
      setAuthToken(false);
      const { apiSpy } = arrange();

      await waitFor(() => {
        expect(screen.queryByText(/content/i)).toBeDefined();
        expect(apiSpy).toBeCalledTimes(0);
      });
    });
  });

  it('try to load user and render content with user', async () => {
    await act(async () => {
      setAuthToken();
      const { apiSpy } = arrange();

      await waitFor(() => {
        expect(screen.queryByText(/content/i)).toBeDefined();
        expect(apiSpy).toBeCalledTimes(1);
      });
    });
  });
});
