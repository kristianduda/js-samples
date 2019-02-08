import React from 'react';
import Todo from './Todo';
import { withFilter } from '../contexts/FilterContext';
import { withTodos } from '../contexts/TodosContext';

class TodoList extends React.Component {
  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'active':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }

  render() {
    const visibleTodos = this.getVisibleTodos(this.props.items, this.props.filter);

    return (
      <ul>
        {visibleTodos.map(item => (
          <Todo key={item.id} completed={item.completed} onClick={(e) => this.props.toggleTodo(item)} text={item.text} />
        ))}
      </ul>
    );
  }
}

export default withTodos(withFilter(TodoList));