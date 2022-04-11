import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITask } from './types';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addTask = (task: string, newKey: string): void => {
    setTaskList([...taskList, { value: task, id: newKey }]);
  };

  const deleteTask = (index: number) => {
    taskList.splice(index, 1);
    setTaskList([...taskList]);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm addTask={addTask} />
      <TaskDashboard taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
