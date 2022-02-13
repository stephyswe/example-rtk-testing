import { act, screen } from '@testing-library/react';
import { arrange } from '../../AppAuth';
import Auth from './Auth';

describe('Feature/Auth', () => {
  it('should render nothing', async () => {
    act(() => {
      const {
        renderResult: { container }
      } = arrange('/', <Auth />);
      expect(container.innerHTML).toBe('');
    });
  });

  it('should render Login page', async () => {
    act(() => {
      arrange('/login', <Auth />);
    });
    const githubLoginLink = screen.getByRole('link', { name: /login/i });
    expect(githubLoginLink).toBeDefined();
  });

  it('should render OAuth page', async () => {
    act(() => {
      arrange('/oauth?code=code', <Auth />);
    });

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeDefined();
  });
});
