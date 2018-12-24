import React from 'react';
import { withFilter } from '../contexts/FilterContext';

const Filter = ({ filter, onFilterChange }) => {
  return (
  <div>
    <label>
      Filter: 
      <select value={filter} onChange={onFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </label>
  </div>
)}

export default withFilter(Filter);