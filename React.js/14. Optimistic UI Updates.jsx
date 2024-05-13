import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    // Optimistically update UI by adding the new todo to the list
    const optimisticTodo = { id: Date.now(), text: newTodo };
    setTodos([...todos, optimisticTodo]);

    // Send the new todo to the server
    fetch('https://api.example.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(optimisticTodo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add todo');
        }
        // Success: do nothing, as the UI is already updated
      })
      .catch((error) => {
        // Revert the UI changes if the server request fails
        setTodos(todos.filter((todo) => todo.id !== optimisticTodo.id));
        console.error(error);
      });

    // Clear the input field
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;