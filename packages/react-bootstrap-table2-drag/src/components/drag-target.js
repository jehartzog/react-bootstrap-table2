import React from 'react';
import { DropTarget } from 'react-dnd';

import { DRAG_TYPES } from '../const';

/* eslint-disable */
  const target = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        item.onDragDrop(item.index, props.index);
    }
  };

  function collectTarget(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDropTarget: connect.dropTarget(),
    };
  }

const Target = ({ connectDropTarget }) => {
    return connectDropTarget(
        <div>TARGET</div>
    );
}

const WrappedTarget = DropTarget(DRAG_TYPES.ROW, target, collectTarget)(Target);

export default WrappedTarget;