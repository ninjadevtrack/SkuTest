import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Planets from 'components/Planets';

import injectSaga from 'utils/injectSaga';
import { fetchPlanets } from 'core/Planets/actions';
import saga from 'core/Planets/saga';
import {
  makeSelectPlanets,
  getLoadingStatus,
  getFetchingStatus,
} from 'core/Planets/selectors';

const mapStateToProps = createStructuredSelector({
  planets: makeSelectPlanets(),
  isLoaded: getLoadingStatus(),
  isFetched: getFetchingStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchPlanets()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'planet', saga });

export default compose(withSaga, withConnect)(Planets);
