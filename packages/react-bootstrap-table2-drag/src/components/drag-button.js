import React from 'react';
import { DragSource } from 'react-dnd';

import { DRAG_TYPES } from '../const';
import { Consumer } from '../context';

/* eslint-disable */
/**
 * Implements the drag source contract.
 */
const source = {
  beginDrag(props) {
    return {
      index: props.index,
      onDragDrop: props.onDragDrop,
    };
  },
  endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
        return;
      }
  
      // // When dropped on a compatible target, do something
      // const item = monitor.getItem();
      // const dropResult = monitor.getDropResult();
      // console.log('dropped from source',props, item, dropResult);
      // props.onDragDrop();
    }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Source = ({ isDragging, connectDragSource, children }) => {
  return connectDragSource(
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
}

const WrappedSource = DragSource(DRAG_TYPES.ROW, source, collectSource)(Source);

const ProvideContext = props => (
  <Consumer>
    { ({ onDragDrop }) => <WrappedSource onDragDrop={onDragDrop} {...props}/> }
  </Consumer>
);

// Export the wrapped component:
export default ProvideContext;
