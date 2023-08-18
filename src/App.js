import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Doctors Appointment",
      date: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      task: "Meeting at School",
      date: "Feb 8th at 4:30pm",
      reminder: true,
    },
    {
      id: 3,
      task: "Dinner with Mom",
      date: "Feb 10th at 8:30pm",
      reminder: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleOnclick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const handleAddTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  return (
    <div className="content">
      <Header setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTasks onAddTask={handleAddTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={handleDelete} onClick={handleOnclick} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
