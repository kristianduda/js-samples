import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} onClick={this.removeTodo} />
        <TodoForm length={this.state.items.length} onSubmit={this.addTodo} />
      </div>
    );
  }

  removeTodo = item => {
    this.setState(state => ({
      items: state.items.filter(x => x.id !== item.id)
    }));
  }

  addTodo = text => {
    const newItem = {
      text: text,
      id: Date.now()
    };

    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  }
}

export default TodoApp;