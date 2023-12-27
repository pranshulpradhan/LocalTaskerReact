import React from 'react';

const Task = ({ task, index, onDelete, onComplete }) => {
  const formattedDate = new Date(task.addedOn).toLocaleString();

  return (
    <tr>
      <td>{index}</td>
      <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.description}
      </td>
      <td>{formattedDate}</td>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onComplete}
        />
      </td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
