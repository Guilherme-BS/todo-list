import React from 'react';

interface TaskItemProps {
  taskName: string;
  deleteTask: () => void;
  editingIdValue: string;
  id: string;
  startEditing: () => void;
  editTask: () => void;
  handleCheck: () => void;
  checked: boolean;
}

export default function TaskItem({
  taskName,
  deleteTask,
  editingIdValue,
  id,
  startEditing,
  editTask,
  handleCheck,
  checked,
}: TaskItemProps) {
  return (
    <li className="todo-stack-small">
      <div className="c-cb">
        <input type="checkbox" onChange={handleCheck} checked={checked} />
        <label className="todo-p">{taskName}</label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={editingIdValue === id ? editTask : startEditing}
        >
          {editingIdValue === id ? 'Save' : 'Edit'}
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger" onClick={deleteTask}>
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
