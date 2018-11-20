
import React from 'react';
import PropTypes from 'prop-types';

import DragButton from './drag-button';
import DragTarget from './drag-target';
import DefaultButton from './default-button';

const DragCell = ({ index, Button = DefaultButton }) => (
  <DragTarget index={ index }>
    <DragButton index={ index }><Button /></DragButton>
  </DragTarget>
);

DragCell.propTypes = {
  index: PropTypes.number.isRequired,
  Button: PropTypes.func
};

DragCell.defaultProps = {
  Button: DefaultButton
};

export default DragCell;
