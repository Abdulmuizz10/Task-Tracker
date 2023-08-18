import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onClick }) => {
  return (
    <>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Tip: "Double click tasks to set and unset reminder"
      </p>
      <div className="Tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
