import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Filter: 
      <select value={value} onChange={onChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </label>
  </div>
)

const mapStateToProps = state => ({
  value: state.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.setFilter(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);