import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const showAlert = message => {
    setAlertMessage(message);
    setIsAlertVisible(true);
  };

  const handleAlertClose = () => {
    setIsAlertVisible(false);
    setAlertMessage('');
  };

  const handleTaskCreate = description => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), description, completed: false, addedOn: new Date() },
    ]);
    showAlert('Task added successfully!');
  };

  const handleTaskDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    showAlert('Task deleted successfully!');
  };

  const handleTaskComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );

    showAlert('Task status updated successfully!');
  };

  const handleClearCompleted = () => {
    const completedTasks = tasks.filter(task => task.completed);

    if (completedTasks.length === 0) {
      showAlert('No completed task in the list.');
    } else {
      setTasks(prevTasks => prevTasks.filter(task => !task.completed));
      showAlert('Cleared completed tasks successfully!');
    }
  };

  return (
    <div>
      <h1>LocalTasker</h1>
      <TaskForm onTaskCreate={handleTaskCreate} />
      <TaskList
        tasks={tasks}
        onTaskDelete={handleTaskDelete}
        onTaskComplete={handleTaskComplete}
        onClearCompleted={handleClearCompleted}
      />
      <Alert
        message={alertMessage}
        isAlertVisible={isAlertVisible}
        onClose={handleAlertClose}
      />
    </div>
  );
};

export default App;
