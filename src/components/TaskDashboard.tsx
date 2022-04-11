import React from 'react';
import TaskItem from './TaskItem';
import { ITask } from '../types/ITask';

interface TaskDashboardProps {
  taskList: ITask[];
}

function TaskDashboard({ taskList }: TaskDashboardProps) {
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
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
        {taskList.map((task) => (
          <TaskItem key={task.id} taskName={task.value} />
        ))}
      </ul>
    </>
  );
}
export default TaskDashboard;
