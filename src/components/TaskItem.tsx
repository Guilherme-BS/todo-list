import React from 'react';

interface TaskItemProps {
  taskName: string;
}

export default function TaskItem({ taskName }: TaskItemProps) {
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
          Save <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
