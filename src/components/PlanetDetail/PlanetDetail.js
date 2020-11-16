import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import './PlanetDetail.css';

const PlanetDetail = ({ title, history }) => {
  const planetInfo = history.location.state?.data;
  return (
    <Container>
      <div className="card">
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <div className="card-body">
          {!!planetInfo &&
            Object.keys(planetInfo).map((key) => {
              return (
                <>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {key}:
                  </span>
                  &nbsp;
                  <span className="card-text" key={'info_' + key}>
                    {planetInfo[key]}
                  </span>
                  <br />
                </>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

PlanetDetail.propTypes = {
  title: PropTypes.string.isRequired,
};

PlanetDetail.defaultProps = {
  title: 'Planet Details',
};

export default PlanetDetail;
