import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import * as storeUtils from './utils/storeUtils';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      filter: 'all' 
    };
  }

  async componentDidMount() {
    try {
      const items = await storeUtils.getTodos();
      this.setState({ items });
    }
    catch(e) {
      console.error(e);
    }
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
        <button onClick={this.clear}>Clear completed</button>
        <TodoForm length={this.state.items.length} onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
      </div>
    );
  }

  clear = async () => {
    try {
      await storeUtils.clear();
      this.setState(state => ({
        items: state.items.filter(todo => todo.completed === false)
      }));
    }
    catch(e) {
      console.error(e);
    }
  }

  toggleTodo = async item => {
    try {
      const newItem = await storeUtils.toggleTodo(item);
      this.setState(state => ({
        items: state.items.map(todo =>
          (todo._id === item._id) ? newItem : todo
        )
      }));
    }
    catch(e) {
      console.error(e);
    }
  }

  addTodo = async text => {
    try {
      const newItem = await storeUtils.addTodo(text);

      this.setState(state => ({
        items: [...state.items, newItem]
      }));
    }
    catch(e) {
      console.error(e);
    }
  }
}

export default TodoApp;