import React, { useState } from "react";

const AddTasks = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Task = { task, date, reminder };
    onAddTask(Task);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            name="task"
            placeholder="Add task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="date">Date & Time:</label>
          <input
            type="text"
            name="date"
            placeholder="Date and Time"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
        <div className="form__control">
          <label htmlFor="check">Set Reminder:</label>
          <input
            type="checkbox"
            name="check"
            onChange={(e) => setReminder(e.currentTarget.checked)}
            checked={reminder}
          />
        </div>
        <button className="bold">Add Task</button>
      </form>
    </div>
  );
};

export default AddTasks;
