import { useState } from "react";
import React from "react";

function TOdoList() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTasks() {
    if (!newTasks.trim()) {
      alert("please enter a task");
      return;
    }

    setTasks((t) => [...t, newTasks]);

    setNewTasks("");
  }
  function deleteTasks(index) {
    const updateTasks = tasks.filter((Element, i) => i !== index);
    setTasks(updateTasks);
  }
  function moveTasksUp(index) {
    if (index === 0) {
      alert("You cannot move the first task up");
      return;
    }
    const updateTasks = [...tasks];
    [updateTasks[index - 1], updateTasks[index]] = [
      updateTasks[index],
      updateTasks[index - 1],
    ];
    setTasks(updateTasks);
  }
  function editTasks(index) {
    setNewTasks(tasks[index]);
  }
  function moveTasksDown(index) {
    if (index === tasks.length - 1) {
      alert("You cannot move the Last task down");
      return;
    }
    const updateTasks = [...tasks];
    [updateTasks[index], updateTasks[index + 1]] = [
      updateTasks[index + 1],
      updateTasks[index],
    ];
    setTasks(updateTasks);
  }
  return (
    <div className="to-do-list">
      <h1>To do list </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTasks}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span className="Text">{tasks}</span>
            <button
              className="Delete-button"
              onClick={() => deleteTasks(index)}
            >
              Delete
            </button>
            <button className="Move-up" onClick={() => moveTasksUp(index)}>
              Up
            </button>
            <button className="Move-down" onClick={() => moveTasksDown(index)}>
              Down
            </button>
            <button
              className="Edit-button"
              onClick={() => {
                editTasks(index);
                deleteTasks(index);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TOdoList;
