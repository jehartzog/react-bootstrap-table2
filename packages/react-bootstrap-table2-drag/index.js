import DragButton from './src/components/drag-button';
import DragTarget from './src/components/drag-target';
import createContext from './src/context';

export default (options = {}) => ({
  createContext,
  options
});

export {
  DragButton,
  DragTarget
};
