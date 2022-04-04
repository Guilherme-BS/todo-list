import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITask } from './components/interface/ITask';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm setTaskList={setTaskList} taskList={taskList} />
      <TaskDashboard taskList={taskList} />
    </div>
  );
}

export default App;
