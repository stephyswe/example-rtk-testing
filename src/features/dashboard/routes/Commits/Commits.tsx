import { Grid } from '@material-ui/core';
import PageContainer from '../../../../shared/components/PageContainer';
import PageHeader from '../../../../shared/components/PageHeader';
import CommitsGrid from './components/CommitGrid';
import CommitsPagination from './components/CommitPagination';
import CommitsSearch from './components/CommitSearch/CommitSearch';
import CommitsSearchFormContext from './components/CommitSearch/CommitSearchFormContext';

const Commits = () => {
  return (
    <CommitsSearchFormContext>
      <PageContainer>
        <PageHeader title="Commits" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CommitsSearch />
          </Grid>
          <Grid item xs={12}>
            <CommitsGrid />
          </Grid>
          <Grid item xs={12}>
            <CommitsPagination />
          </Grid>
        </Grid>
      </PageContainer>
    </CommitsSearchFormContext>
  );
};

export default Commits;
