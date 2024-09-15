import React from 'react';

function TodoList({ todos, handleDelete, handleUpdate, handleInputChange }) {
  return (
    <ul className="mt-10 w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="w-full p-2 mt-5 shadow-md rounded-md flex justify-between items-center"
        >
          {todo.isEditing ? (
            <input
              type="text"
              className="flex-grow p-2 border border-gray-400 rounded-md mr-2"
              value={todo.value}
              onChange={(e) => handleInputChange(todo.id, e.target.value)}
            />
          ) : (
            <span className="flex-grow p-2">{todo.value}</span>
          )}
          <div className="space-x-2">
            <button
              onClick={() => handleUpdate(todo.id)}
              className="bg-green-500 p-2 text-xl hover:bg-green-600 transition text-white rounded-md"
            >
              {todo.isEditing ? "Save" : "Edit"}
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-red-500 p-2 text-xl hover:bg-red-600 transition text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
