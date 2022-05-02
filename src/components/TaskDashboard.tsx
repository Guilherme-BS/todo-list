import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { ITask } from '../types';

interface TaskDashboardProps {
  taskList: ITask[];
  deleteTask: (value: string) => void;
  editingIdValue: string;
  startEditing: (id: string, value: string) => void;
  editTask: (value: string) => void;
  handleCheck: (value: string) => void;
}

function TaskDashboard({
  taskList,
  deleteTask,
  editingIdValue,
  startEditing,
  editTask,
  handleCheck,
}: TaskDashboardProps) {
  const [taskBoardRender, setTaskBoardRender] = useState([...taskList]);
  const [filterName, setFilterName] = useState('All');
  const handleFilter = () => {
    if (filterName === 'All') {
      setTaskBoardRender(taskList);
    } else if (filterName === 'Active') {
      setTaskBoardRender(
        taskList.filter((taskObject) => taskObject.check === false),
      );
    } else {
      setTaskBoardRender(
        taskList.filter((taskObject) => taskObject.check === true),
      );
    }
  };

  useEffect(() => {
    handleFilter();
  }, [taskList, filterName]);

  return (
    <>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          className="btn toggle-btn"
          onClick={() => setFilterName('All')}
        >
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          onClick={() => setFilterName('Active')}
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          onClick={() => setFilterName('Complete')}
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Complete</button>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskBoardRender.map((task) => (
          <TaskItem
            key={task.id}
            taskName={task.value}
            deleteTask={() => deleteTask(task.id)}
            editingIdValue={editingIdValue}
            id={task.id}
            check={task.check}
            startEditing={() => startEditing(task.id, task.value)}
            editTask={() => editTask(task.id)}
            handleCheck={() => handleCheck(task.id)}
          />
        ))}
      </ul>
    </>
  );
}
export default TaskDashboard;
