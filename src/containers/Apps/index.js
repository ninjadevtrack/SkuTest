import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';

import { fetchPlanets } from 'core/App/actions';
import { makeSelectPlanets } from 'core/App/selectors';
import saga from 'core/App/saga';

import App from 'components/App';

const mapStateToProps = createStructuredSelector({
  planets: makeSelectPlanets(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlanets: () => dispatch(fetchPlanets()),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'app', saga });

export default compose(withRouter, withSaga, withConnect)(App);
