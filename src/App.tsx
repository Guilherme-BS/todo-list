import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITask } from './types/ITask';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addTask = (task: string, newKey: string): void => {
    setTaskList([...taskList, { value: task, id: newKey }]);
  };
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm addTask={addTask} />
      <TaskDashboard taskList={taskList} />
    </div>
  );
}

export default App;
