import React from 'react';

interface TaskItemProps {
  taskName: string;
  deleteTask: () => void;
  editButtonValue: string;
  id: string;
  startEditing: () => void;
  editTask: () => void;
}

export default function TaskItem({
  taskName,
  deleteTask,
  editButtonValue,
  id,
  startEditing,
  editTask,
}: TaskItemProps) {
  return (
    <li className="todo-stack-small">
      <div className="c-cb">
        <input type="checkbox" />
        <label className="todo-p">{taskName}</label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={editButtonValue === id ? editTask : startEditing}
        >
          {editButtonValue === id ? 'Save' : 'Edit'}
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger" onClick={deleteTask}>
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
