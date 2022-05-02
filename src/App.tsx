import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { ITask } from './types';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [editingIdValue, setEditingIdValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = (task: string, newKey: string, check: boolean): void => {
    setTaskList([...taskList, { value: task, id: newKey, check: false }]);
  };

  const startEditing = (id: string, task: string) => {
    setEditingIdValue(id);
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
    setEditingIdValue('');
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((taskObject) => taskObject.id !== id));
  };

  const handleCheck = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, check: !task.check };
        }
        return task;
      }),
    );
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        addTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editTask={editTask}
        editingIdValue={editingIdValue}
      />
      <TaskDashboard
        taskList={taskList}
        deleteTask={deleteTask}
        editingIdValue={editingIdValue}
        startEditing={startEditing}
        editTask={editTask}
        handleCheck={handleCheck}
      />
    </div>
  );
}

export default App;
