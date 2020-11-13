import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Residents from 'components/Residents';

import injectSaga from 'utils/injectSaga';
import { fetchResidents } from 'core/Residents/actions';
import saga from 'core/Residents/saga';
import {
  makeSelectResidents,
  getLoadingStatus,
  getFetchingStatus,
} from 'core/Residents/selectors';

const mapStateToProps = createStructuredSelector({
  residents: makeSelectResidents(),
  isLoading: getLoadingStatus(),
  isFetched: getFetchingStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: ({ residentUrls }) => dispatch(fetchResidents({ residentUrls })),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'resident', saga });

export default compose(withSaga, withConnect)(Residents);
