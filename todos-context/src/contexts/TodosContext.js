import React from 'react';

const TodosContext = React.createContext();

export class TodosProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
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

  render() {
    const { children } = this.props;

    return (
      <TodosContext.Provider
        value={{
          items: this.state.items,
          addTodo: this.addTodo,
          toggleTodo: this.toggleTodo
        }}
      >      
        {children}
      </TodosContext.Provider>
    );
  }
}

export const withTodos = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <TodosContext.Consumer>
          {value => 
            <WrappedComponent
              {...this.props}
              {...value}  
            />
          }
        </TodosContext.Consumer>
      );
    }
  }
};