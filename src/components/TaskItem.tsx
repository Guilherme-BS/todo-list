import React from 'react';

interface TaskItemProps {
  taskName: string;
  index: number;
  deleteTask: (value: number) => void;
}

export default function TaskItem({
  taskName,
  index,
  deleteTask,
}: TaskItemProps) {
  return (
    <li className="todo-stack-small">
      <div className="c-cb">
        <input type="checkbox" />
        <label className="todo-label" htmlFor="todo-0">
          {taskName}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden" />
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(index)}
        >
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
