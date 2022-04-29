import React from 'react';
import TaskItem from './TaskItem';
import { ITask } from '../types';

interface TaskDashboardProps {
  taskList: ITask[];
  deleteTask: (value: string) => void;
  editingIdValue: string;
  startEditing: (id: string, value: string) => void;
  editTask: (value: string) => void;
}

function TaskDashboard({
  taskList,
  deleteTask,
  editingIdValue,
  startEditing,
  editTask,
}: TaskDashboardProps) {
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
          <TaskItem
            key={task.id}
            taskName={task.value}
            deleteTask={() => deleteTask(task.id)}
            editingIdValue={editingIdValue}
            id={task.id}
            startEditing={() => startEditing(task.id, task.value)}
            editTask={() => editTask(task.id)}
          />
        ))}
      </ul>
    </>
  );
}
export default TaskDashboard;
