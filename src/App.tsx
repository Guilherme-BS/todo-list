import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITask } from './types';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [editButtonValue, setEditButtonValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = (task: string, newKey: string): void => {
    setTaskList([...taskList, { value: task, id: newKey }]);
  };

  const startEditing = (id: string, task: string) => {
    setEditButtonValue(id);
    setInputValue(task);
  };

  const editTask = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, value: inputValue };
        }
        return task;
      }),
    );
    setInputValue('');
    setEditButtonValue('');
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((taskObject) => taskObject.id !== id));
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editTask={editTask}
        editButtonValue={editButtonValue}
      />
      <TaskDashboard
        taskList={taskList}
        deleteTask={deleteTask}
        editButtonValue={editButtonValue}
        startEditing={startEditing}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
