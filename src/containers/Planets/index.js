import { connect } from 'react-redux';
import { compose } from 'redux';
import Planets from 'components/Planets';

import injectSaga from 'utils/injectSaga';
import actions from 'core/actions';
import saga from 'core/Planets/saga';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchPlanets: actions.planets.fetchPlanets,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'planets', saga });

export default compose(withSaga, withConnect)(Planets);
