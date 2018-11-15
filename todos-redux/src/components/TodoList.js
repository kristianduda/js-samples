import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

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

const mapStateToProps = state => ({
  items: state.todos
})

const mapDispatchToProps = dispatch => ({
  onClick: item => dispatch(actions.removeTodo(item.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);