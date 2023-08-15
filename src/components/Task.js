import React from "react";

const Task = ({ task, onDelete, onClick }) => {
  return (
    <div className="Task" onDoubleClick={() => onClick(task.id)}>
      <div className={`${task.reminder ? "active" : ""}`}>
        <h1>{task.task}</h1>
        <p>{task.date}</p>
      </div>
      <i className="bx bx-x" onClick={() => onDelete(task.id)}></i>
    </div>
  );
};

export default Task;
