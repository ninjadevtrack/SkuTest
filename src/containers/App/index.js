import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import routes from './routes';

const App = () => (
  <div className="App">
    <Helmet>
      <meta name="description" content="Check Conversion" />
      <title>Check Conversion</title>
    </Helmet>
    {routes()}
  </div>
);

const withSaga = injectSaga({ key: 'app', saga });
export default compose(withRouter, withSaga)(App);
