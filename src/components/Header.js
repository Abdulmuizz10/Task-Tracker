import React from "react";

const Header = ({ setShowAddTask, showAddTask }) => {
  let button = "Close";
  return (
    <header>
      <h2>Task Tracker</h2>
      <button className="btn" onClick={() => setShowAddTask(!showAddTask)}>
        {showAddTask ? button : (button = "Create")}
      </button>
    </header>
  );
};

export default Header;
