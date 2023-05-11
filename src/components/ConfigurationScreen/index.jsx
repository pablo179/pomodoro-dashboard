import React from 'react';
import PropTypes from 'prop-types';

function ConfigurationScreen({ setOpenConfig }) {
  const closeConfig = () => {
    setOpenConfig(false);
  };
  return (
    <div>
      <h1>Configuration Screen</h1>
      <button type="button" onClick={closeConfig}> close </button>
    </div>
  );
}

ConfigurationScreen.propTypes = {
  setOpenConfig: PropTypes.func.isRequired,
};

export default ConfigurationScreen;
