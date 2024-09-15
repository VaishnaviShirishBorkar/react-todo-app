import { useState } from "react";
import "./App.css";
import TodoList from './components/TodoList'; // Import the new component

function App() {
  const [todovalue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todovalue.trim() === "") return;

    const newTodo = {
      id: new Date().getTime(),
      value: todovalue,
      isEditing: false, // Tracks if the todo is being edited
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoValue("");
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleInputChange = (id, newValue) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, value: newValue } : todo
      )
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center bg-white p-5 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-10">To-Do App</h1>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <input
            className="flex-grow p-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
            type="text"
            placeholder="Enter your to-do"
            value={todovalue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>

        {/* Use the TodoList component here */}
        <TodoList 
          todos={todos}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
