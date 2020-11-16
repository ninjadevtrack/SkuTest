import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Spinner } from 'react-bootstrap';

import './Residents.css';
import Grid from '../Grid';

const Residents = ({
  title,
  residents,
  fetchData,
  isLoading,
  isFetched,
  history,
}) => {
  const residentUrls = history.location.state?.residentUrls;
  useEffect(() => {
    if (!!residentUrls && residentUrls.length > 0) {
      fetchData({ residentUrls });
    }
  }, [residentUrls, fetchData]);

  if (isLoading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} />
        &nbsp;&nbsp;
        <p>Loading...</p>
      </Container>
    );
  }

  if (!isFetched) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} />
        &nbsp;&nbsp;
        <p>Fetching...</p>
      </Container>
    );
  }

  const gridData = residents || [];
  const gridProps = {
    columns: [
      {
        id: 1,
        field: 'name',
        label: 'name',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 2,
        field: 'height',
        label: 'height',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 3,
        field: 'mass',
        label: 'mass',
        isSortable: false,
        isHidden: false,
        type: 'number',
      },
      {
        id: 4,
        field: 'gender',
        label: 'gender',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 5,
        field: 'hair_color',
        label: 'hair_color',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 6,
        field: 'skin_color',
        label: 'skin_color',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 7,
        field: 'eye_color',
        label: 'eye_color',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
      {
        id: 8,
        field: 'birth_year',
        label: 'birth_year',
        isSortable: false,
        isHidden: false,
        type: 'string',
      },
    ],
    config: {
      itemCount: residentUrls?.length,
      showAction: false,
    },
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <Grid data={gridData} gridProps={gridProps} />
    </div>
  );
};

Residents.propTypes = {
  title: PropTypes.string.isRequired,
  residents: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};

Residents.defaultProps = {
  title: 'Residents List',
};

export default Residents;
