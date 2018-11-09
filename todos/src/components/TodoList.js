import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} onClick={(e) => this.props.onClick(item)}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;