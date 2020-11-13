import React from 'react';
import PropTypes from 'prop-types';

import './PlanetDetail.css';

const PlanetDetail = ({ title, history }) => {
  const planetInfo = history.location.state?.data;
  return (
    <div className="App">
      <h1>{title}</h1>
      <section className="info">
        {!!planetInfo &&
          Object.keys(planetInfo).map((key) => {
            return <p key={'info_' + key}>{planetInfo[key]}</p>;
          })}
      </section>
    </div>
  );
};

PlanetDetail.propTypes = {
  title: PropTypes.string.isRequired,
};

PlanetDetail.defaultProps = {
  title: 'Planet Details',
};

export default PlanetDetail;
