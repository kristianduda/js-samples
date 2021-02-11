import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';

import { connect } from 'react-redux';
import * as actions from './actions';

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList />
        <button onClick={this.props.clear}>Clear completed</button>
        <TodoForm />
        <Filter />
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(actions.clear())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);