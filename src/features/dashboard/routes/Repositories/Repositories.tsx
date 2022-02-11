import { Grid } from '@material-ui/core';
import PageContainer from '../../../../shared/components/PageContainer';
import PageHeader from '../../../../shared/components/PageHeader';
import RepositoryGrid from './components/RepositoryGrid';
import RepositoryPagination from './components/RepositoryPagination';
import RepositorySearch from './components/RepositorySearch/RepositorySearch';
import RepositorySearchFormContext from './components/RepositorySearch/RepositorySearchFormContext';


const Repositories = () => {
  return (
    <RepositorySearchFormContext>
      <PageContainer>
        <PageHeader title="Repositories" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RepositorySearch />
          </Grid>
          <Grid item xs={12}>
            <RepositoryGrid />
          </Grid>
          <Grid item xs={12}>
            <RepositoryPagination />
          </Grid>
        </Grid>
      </PageContainer>
    </RepositorySearchFormContext>
  );
};

export default Repositories;
