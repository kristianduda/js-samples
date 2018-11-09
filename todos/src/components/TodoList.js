import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Todo key={item.id} completed={item.completed} onClick={(e) => this.props.onClick(item)} text={item.text} />
        ))}
      </ul>
    );
  }
}

export default TodoList;