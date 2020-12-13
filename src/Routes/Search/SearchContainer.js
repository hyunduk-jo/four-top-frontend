import { withRouter } from 'react-router-dom';
import SearchPresenter from './SearchPresenter';

const SearchContainer = ({ location: { search } }) => {
  const term = search.split("=")[1];
  return <SearchPresenter term={term} />
}

export default withRouter(SearchContainer);