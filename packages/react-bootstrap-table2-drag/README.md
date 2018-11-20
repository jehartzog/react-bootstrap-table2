
You must set up the [DragDropContext](http://react-dnd.github.io/react-dnd/docs/api/drag-drop-context) at your application root:

```
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class YourApp {
	/* ... */
}

export default DragDropContext(HTML5Backend)(YourApp)
```
