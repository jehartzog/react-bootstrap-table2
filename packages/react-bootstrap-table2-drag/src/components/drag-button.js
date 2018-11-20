import React from 'react';
import { DragSource } from 'react-dnd';

import { DRAG_TYPES } from '../const';

/* eslint-disable */
/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Card({ isDragging, connectDragSource, text }) {
  return connectDragSource(
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
}

// Export the wrapped component:
export default DragSource(DRAG_TYPES.ROW, cardSource, collect)(Card);
