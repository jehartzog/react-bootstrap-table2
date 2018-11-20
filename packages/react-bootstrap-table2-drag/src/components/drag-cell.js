
import React from 'react';

import DragButton from './drag-button';
import DragTarget from './drag-target';
import DefaultButton from './default-button';

const DragCell = ({ index, Button = DefaultButton }) => (
  <DragTarget index={ index }>
    <DragButton index={ index }><span className="glyphicon glyphicon-move" /></DragButton>
  </DragTarget>
);

export default DragCell;
