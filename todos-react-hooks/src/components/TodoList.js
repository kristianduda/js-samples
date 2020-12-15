import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <Todo key={item.id} completed={item.completed} onClick={(e) => props.onClick(item)} text={item.text} />
      ))}
    </ul>
  );
}

export default TodoList;