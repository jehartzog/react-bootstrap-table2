import React from 'react';
/* eslint-disable */
import { DragSource, DropTarget, DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import BootstrapTable from 'react-bootstrap-table-next';
import dragFactory from '../../../react-bootstrap-table2-drag';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

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
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </div>
    );
  }

  const target = {
    drop(props, monitor, component) {
        console.log('dropped into target', props, monitor, component);
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

const WrappedSource = DragSource('CONST', source, collectSource)(Source);
const WrappedTarget = DropTarget('CONST', target, collectTarget)(Target);

const dragFormatter = (cell, row, rowIndex, extraData) => {
    console.log(cell, row, rowIndex, extraData);
    return <div><WrappedSource text="X" /><WrappedTarget text="Y" /></div>;
};

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}, {
  dataField: 'drag',
  text: 'Order rows',
  isDummyField: true,
  formatter: dragFormatter
}];


const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } />
`;

export default () => (
  <div>
      <DragDropContextProvider backend={HTML5Backend}>
        <BootstrapTable keyField="id" data={ products } columns={ columns } drag={dragFactory()} />
      </DragDropContextProvider>
    <Code>{ sourceCode }</Code>
  </div>
);
