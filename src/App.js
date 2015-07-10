import React from 'react';
import BigHeading from './components/BigHeading';
import TodoItems from './components/TodoItems';

function getInitialState() {
  return {
    todoItems: [
      {id: 1, complete: true,  text: 'Fire up this React boilerplate'},
      {id: 2, complete: false, text: 'Implement "complete" and "uncomplete" for TODO items'},
      {id: 3, complete: false, text: 'Implement "add" and "remove" for TODO items'},
      {id: 4, complete: false, text: 'Rip out all of this dummy/demo code'},
      {id: 5, complete: false, text: 'Go forth and build!'}
    ]
  };
}

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = getInitialState();
  }

  render() {
    const {
      todoItems: items
    } = this.state;

    const completeCount = items.reduce((sum, item) => sum + ((item.complete) ? 1 : 0), 0);

    return (
      <div>
        <BigHeading>A Great React App</BigHeading>
        <p>
          {completeCount} of {items.length} TODOs completed
        </p>
        <TodoItems items={items}/>
      </div>
    )
  }

}
