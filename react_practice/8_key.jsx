//A key is a special string attribute you should include when creating arrays of elements.
//Key prop helps React identify which items have changed, are added, or are removed

//Most often we use ID from our data as key
const todoItems1 = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

//........................................................................................
//When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort
const todoItems2 = todos.map((todo, index) => (
  <li key={index}> {todo.text}</li>
));
/////////////////////////////////////////////////////////////////////////////////////////////

//Using indexes for keys is not recommended if the order of items may change.
//This can negatively impact performance and may cause issues with component state.
