import React, { useReducer, useState } from "react";

// Reducer function to manage state changes
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, dispatch] = useReducer(todoReducer, []);

  const addTask = () => {
    if (taskText.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: taskText });
      setTaskText("");
    }
  };

  const removeTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  return (
    <div>
      <h1>Todo List App useReducer</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <h2>Task List</h2>
        <p>Total Tasks: {tasks.length}</p>
        <ul style={{ listStylePosition: "inside" }}>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text}{" "}
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
