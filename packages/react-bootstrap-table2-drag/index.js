import DragButton from './src/components/drag-button';
import createContext from './src/context';

export default (options = {}) => ({
  createContext,
  options
});


export const dragButton = (props = {}) => ({
  Source: DragButton,
  props
});
