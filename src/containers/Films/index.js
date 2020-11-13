import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Films from 'components/Films';

import injectSaga from 'utils/injectSaga';
import { fetchFilms } from 'core/Films/actions';
import saga from 'core/Films/saga';
import {
  makeSelectFilms,
  getLoadingStatus,
  getFetchingStatus,
} from 'core/Films/selectors';

const mapStateToProps = createStructuredSelector({
  films: makeSelectFilms(),
  isLoading: getLoadingStatus(),
  isFetched: getFetchingStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: ({ filmUrls }) => dispatch(fetchFilms({ filmUrls })),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'film', saga });

export default compose(withSaga, withConnect)(Films);
