import React from 'react';
/* eslint-disable */
import { DragSource, DropTarget, DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import BootstrapTable from 'react-bootstrap-table-next';
import dragFactory, { DragButton } from '../../../react-bootstrap-table2-drag';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();


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

const WrappedTarget = DropTarget('ROW', target, collectTarget)(Target);

const dragFormatter = (cell, row, rowIndex, extraData) => {
    console.log(cell, row, rowIndex, extraData);
    return <div><DragButton text="X" /><WrappedTarget text="Y" /></div>;
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
