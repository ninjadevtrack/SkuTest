import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Route from './routes';
import './App.css';

const App = function () {
  useEffect(() => {
    console.log('here');
  }, []);

  return (
    <div className="App">
      <Route />
    </div>
  );
};

App.propTypes = {
  planets: PropTypes.object.isRequired,
  fetchPlanets: PropTypes.func.isRequired,
};

export default App;
