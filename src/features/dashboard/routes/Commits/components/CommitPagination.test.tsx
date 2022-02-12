import { act, waitFor } from '@testing-library/react';
import { awaitDataRender, findPaginationButtons, getDataByPageIndex } from '../../../../../../test/routes/commits';
import { changePage } from '../../../../../../test/routes/shared';
import { repositoryMockApiData } from '../../../../../mocks/github/repository/data';
import { repositoryMockApiHandlerDefaults } from '../../../../../mocks/github/repository/handlers';
import { arrangeCommitsRoute } from '../Commits.test';

describe('Component/CommitsPagination', () => {
  it('should paginate back&forth', async () => {
    act(() => {
      arrangeCommitsRoute();
    });
    const { prevBtn, nextBtn } = await findPaginationButtons();

    await awaitDataRender(getDataByPageIndex(0));
    await changePage(nextBtn);
    await awaitDataRender(getDataByPageIndex(1));
    await changePage(prevBtn);
    await awaitDataRender(getDataByPageIndex(0));
  });

  it('should have correct pagination buttons disable state on page 1', async () => {
    act(() => {
      arrangeCommitsRoute();
    });
    const { prevBtn, nextBtn } = await findPaginationButtons();

    await waitFor(() => {
      expect(prevBtn).toHaveAttribute('disabled');
      expect(nextBtn).not.toHaveAttribute('disabled');
    });
  });

  it('should have correct pagination buttons disable state on page 2', async () => {
    act(() => {
      arrangeCommitsRoute();
    });
    const { prevBtn, nextBtn } = await findPaginationButtons();

    await awaitDataRender(getDataByPageIndex(0));
    await changePage(nextBtn);
    await awaitDataRender(getDataByPageIndex(1));
    expect(prevBtn).not.toHaveAttribute('disabled');
    expect(nextBtn).not.toHaveAttribute('disabled');
  });

  it('should have correct pagination buttons disable state on last page', async () => {
    act(() => {
      arrangeCommitsRoute();
    });
    const { prevBtn, nextBtn } = await findPaginationButtons();
    const navigateToLastPage = async () => {
      const { per_page, page } = repositoryMockApiHandlerDefaults.getRepositoryCommits;
      const maxPage = Math.ceil(repositoryMockApiData.commit.base.length / per_page);
      for (let i = page; i < maxPage; i++) {
        await changePage(nextBtn);
        await awaitDataRender(getDataByPageIndex(i));
      }
    };

    await awaitDataRender(getDataByPageIndex(0));
    await navigateToLastPage();

    await waitFor(() => {
      expect(prevBtn).not.toHaveAttribute('disabled');
      expect(nextBtn).toHaveAttribute('disabled');
    });
  });
});
