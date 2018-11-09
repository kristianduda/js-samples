import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      filter: 'all' 
    };
  }

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

  onFilterChange = (e) => {
    this.setState({filter: e.target.value});
  }

  render() {
    const visibleTodos = this.getVisibleTodos(this.state.items, this.state.filter);

    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={visibleTodos} onClick={this.toggleTodo} />
        <TodoForm length={this.state.items.length} onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
      </div>
    );
  }

  toggleTodo = item => {
    this.setState(state => ({
      items: state.items.map(todo =>
        (todo.id === item.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    }));
  }

  addTodo = text => {
    const newItem = {
      text,
      id: Date.now(),
      completed: false
    };

    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  }
}

export default TodoApp;