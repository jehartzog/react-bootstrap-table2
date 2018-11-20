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
      console.log('started drag');
    return {
      text: props.text
    };
  },
  endDrag(props, monitor, component) {
      if (!monitor.didDrop()) {
        return;
      }
  
      // When dropped on a compatible target, do something
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      console.log('dropped from source',item, dropResult);
    }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Source = ({ isDragging, connectDragSource, connectDropTarget, text }) => {
  console.log(Consumer);
  return connectDragSource(
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Consumer>
        { ({ onDragDrop }) => <p onClick={onDragDrop}>Thing</p> }
      </Consumer>
    </div>
  );
}

const ProvideContext = (
  <Consumer>
    <Source />
  </Consumer>
);

// Export the wrapped component:
export default DragSource(DRAG_TYPES.ROW, source, collectSource)(Source);
