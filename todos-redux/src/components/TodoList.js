import React from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';
import * as actions from '../actions';

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

const mapStateToProps = state => ({
  items: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  onClick: item => dispatch(actions.toggleTodo(item.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);