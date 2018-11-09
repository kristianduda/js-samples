import React from 'react';

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

export default Filter;