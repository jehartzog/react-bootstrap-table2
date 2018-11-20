import React from 'react';
import { DropTarget } from 'react-dnd';

import { DRAG_TYPES } from '../const';

/* eslint-disable */
  const target = {
    drop(props, monitor, component) {
        console.log('dropped into target', props, monitor, component);
        const item = monitor.getItem();
        console.log('moo', item);
    }
  };

  function collectTarget(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDropTarget: connect.dropTarget(),
    };
  }

const Target = ({ connectDropTarget, text }) => {
    return connectDropTarget(
        <div>{text}</div>
    );
}

const WrappedTarget = DropTarget(DRAG_TYPES.ROW, target, collectTarget)(Target);

export default WrappedTarget;