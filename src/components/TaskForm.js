import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onTaskCreate }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskChange = e => {
    setTaskDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      onTaskCreate(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskDescription}
        onChange={handleTaskChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;