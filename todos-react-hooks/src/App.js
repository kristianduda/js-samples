import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';

const TodoApp = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     items: [], 
  //     filter: 'all' 
  //   };
  // }
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'active':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const toggleTodo = item => {
    setItems(items.map(todo =>
      (todo.id === item.id)
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  }

  const addTodo = text => {
    const newItem = {
      text,
      id: Date.now(),
      completed: false
    };

    setItems([...items, newItem]);
  }

  const visibleTodos = getVisibleTodos(items, filter);

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={visibleTodos} onClick={toggleTodo} />
      <TodoForm length={items.length} onSubmit={addTodo} />
      <Filter value={filter} onChange={onFilterChange} />
    </div>
  );
}

export default TodoApp;