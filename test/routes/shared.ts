import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const changePage = async (btnEl: Element) => {
  await act(async () => {
    userEvent.click(btnEl);
  });
};
