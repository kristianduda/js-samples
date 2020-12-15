import React, { useState } from 'react';

const TodoForm = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
     }

     props.onSubmit(text);
     setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">
        What needs to be done?
        </label>
      <input
        id="new-todo"
        onChange={handleChange}
        value={text}
      />
      <button>
        Add #{props.length + 1}
      </button>
    </form>
  );
}

export default TodoForm;