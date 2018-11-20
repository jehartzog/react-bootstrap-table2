import React from 'react';
import { DragSource } from 'react-dnd';

import { DRAG_TYPES } from '../const';
import { Consumer } from '../context';

/**
 * Implements the drag source contract.
 */
const source = {
  beginDrag(props) {
    return {
      index: props.index,
      onDragDrop: props.onDragDrop
    };
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Source = ({ connectDragSource, children }) => (
  connectDragSource(
    <div>
      {children}
    </div>
  )
);

const WrappedSource = DragSource(DRAG_TYPES.ROW, source, collectSource)(Source);

const ProvideContext = props => (
  <Consumer>
    { ({ onDragDrop }) => <WrappedSource onDragDrop={ onDragDrop } { ...props } /> }
  </Consumer>
);

// Export the wrapped component:
export default ProvideContext;
