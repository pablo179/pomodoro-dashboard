import React from 'react';
import PropTypes from 'prop-types';

function Icon({ name }) {
  return (
    <span className="material-symbols-outlined">
      {name}
    </span>
  );
}

Icon.defaultProps = {
  name: 'rocket',
};
Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
