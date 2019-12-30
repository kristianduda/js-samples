import React, { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';

const Filter = () => {
  const { filter, onFilterChange } = useContext(FilterContext);

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

export default Filter;