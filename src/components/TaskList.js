import React from 'react';
import Task from './Task';
import './TaskList.css'; // Import the corresponding CSS file

const TaskList = ({ tasks, onTaskDelete, onTaskComplete, onClearCompleted }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="center">S. No</th>
            <th className="center">Task Description</th>
            <th className="center">Added On</th>
            <th className="center">Mark as Complete</th>
            <th className="center">Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index + 1}
              onDelete={() => onTaskDelete(task.id)}
              onComplete={() => onTaskComplete(task.id)}
            />
          ))}
        </tbody>
      </table>
      <button className="clearButton" onClick={onClearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TaskList;
