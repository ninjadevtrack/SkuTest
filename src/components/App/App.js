import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Route from './routes';
import './App.css';

const App = function ({ planets, fetchPlanets }) {
  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  if (!planets) {
    return <div>Loading...</div>;
  }

  console.log('==Loading==');
  console.log(planets);
  return (
    <div className="App">
      <Route />
    </div>
  );
};

App.propTypes = {
  planets: PropTypes.object,
  fetchPlanets: PropTypes.func.isRequired,
};

export default App;
