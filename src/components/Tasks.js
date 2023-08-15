import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onClick }) => {
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onClick={onClick} />
      ))}
    </div>
  );
};

export default Tasks;
