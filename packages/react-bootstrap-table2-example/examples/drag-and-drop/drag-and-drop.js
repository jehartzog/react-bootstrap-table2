import React from 'react';
/* eslint-disable */
import { DragSource, DropTarget, DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import BootstrapTable from 'react-bootstrap-table-next';
import dragFactory, { DragButton, DragTarget } from '../../../react-bootstrap-table2-drag';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();


const dragFormatter = (cell, row, rowIndex, extraData) => {
    console.log(cell, row, rowIndex, extraData);
    return <div><DragButton text="X"/><DragTarget text="Y" /></div>;
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
