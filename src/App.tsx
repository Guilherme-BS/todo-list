import React from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITask } from './types';
import { TodoContextProvider } from './context/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className="todoapp stack-large">
        <Title />
        <AddItemForm />
        <TaskDashboard />
      </div>
    </TodoContextProvider>
  );
}

export default App;
