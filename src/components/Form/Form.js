import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  // Col,
} from 'reactstrap';
import Select from 'react-select';
import { useToasts } from 'react-toast-notifications';
import './Form.css';

const FeatureModal = ({
  headerLabel,
  data,
  onSubmitClick,
  config,
  changeForm,
  isSuccess,
  isFailed,
}) => {
  const { addToast } = useToasts();
  const options = data['terrain']?.map((item) => {
    return { value: item, label: item };
  });

  const initialState = {
    ...data,
    terrain: !!options ? options[0].value : '',
  };

  const [state, setState] = useState({});
  const [selectedOption, setSelectedOption] = useState(
    !!options ? options[0] : {}
  );
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleDropDownChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setState({ ...state, terrain: selectedOption.value });
  };

  const onSave = () => {
    setState(initialState);
    console.log('start here');
    changeForm(state);
  };

  useEffect(() => {
    setState(initialState);
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      addToast('Saved Successfully!', {
        appearance: 'success',
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
      onSubmitClick();
    }
    if (isFailed) {
      addToast('Failed!', {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 1500,
      });
      onSubmitClick();
    }
  }, [isSuccess, isFailed]);

  return (
    <AvForm onValidSubmit={onSave} className="form-container">
      <ModalHeader>{headerLabel}</ModalHeader>
      <ModalBody>
        {Object.keys(config).map((key) => {
          const item = config[key];
          if (config[key]['type'] === 'number') {
            return (
              <AvGroup key={'item_' + item.label}>
                <Label for={key}>{item.label}</Label>
                <AvField
                  value={state[key]}
                  onChange={handleOnChange}
                  type="number"
                  name={key}
                  id={key}
                  required={true}
                  min={0}
                  step={1}
                />
              </AvGroup>
            );
          }
          if (config[key]['type'] === 'dropdown') {
            return (
              <AvGroup key={'item_' + item.label}>
                <Label for={key}>{item.label}</Label>
                <Select
                  label={key}
                  name={key}
                  id={key}
                  value={selectedOption}
                  options={options}
                  onChange={handleDropDownChange}
                />
              </AvGroup>
            );
          }
          return (
            <AvGroup key={'item_' + item.label}>
              <Label for={key}>{item.label}</Label>
              <AvField
                value={state[key]}
                onChange={handleOnChange}
                name={key}
                id={key}
                required={true}
              />
            </AvGroup>
          );
        })}
        <Button color="primary" type="submit">
          Confirm
        </Button>
      </ModalBody>
    </AvForm>
  );
};

FeatureModal.propTypes = {
  headerLabel: PropTypes.string,
  data: PropTypes.object.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  config: PropTypes.shape({
    name: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    rotation_period: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    orbital_period: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    diameter: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    climate: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    gravity: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    terrain: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    surface_water: PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
};

FeatureModal.defaultProps = {
  isLoading: false,
  isOpen: false,
  headerLabel: 'Feature Modal',
  config: {
    name: {
      label: 'Name',
      type: 'text',
    },
    rotation_period: {
      label: 'Rotation Period',
      type: 'number',
    },
    orbital_period: {
      label: 'Orbital Period',
      type: 'number',
    },
    diameter: {
      label: 'Diameter',
      type: 'number',
    },
    climate: {
      label: 'climate',
      type: 'text',
    },
    gravity: {
      label: 'gravity',
      type: 'text',
    },
    terrain: {
      label: 'terrain',
      type: 'dropdown',
    },
    surface_water: {
      label: 'surface water',
      type: 'number',
    },
  },
};

export default FeatureModal;
