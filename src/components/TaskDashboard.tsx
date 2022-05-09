import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { ITask } from '../types';
import { useTodoContext } from '../context/TodoContext';

type SelectFilter = 'All' | 'Active' | 'Complete';

function TaskDashboard() {
  const { taskList } = useTodoContext();
  const [taskBoardRender, setTaskBoardRender] = useState<ITask[]>(taskList);
  const [filterName, setFilterName] = useState<SelectFilter>('All');

  const handleFilter = () => {
    switch (filterName) {
      case 'Active':
        setTaskBoardRender(
          taskList.filter((taskObject) => taskObject.checked === false),
        );
        break;
      case 'Complete':
        setTaskBoardRender(
          taskList.filter((taskObject) => taskObject.checked === true),
        );
        break;
      default:
        setTaskBoardRender(taskList);
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
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
export default TaskDashboard;
