import React, { useState } from 'react';

interface TaskItemProps {
  taskName: string;
  deleteTask: () => void;
}

export default function TaskItem({ taskName, deleteTask }: TaskItemProps) {
  const [inputEdit, setInputEdit] = useState<string>(taskName);
  const [editando, setEditando] = useState<boolean>(false);

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputEdit(e.target.value);
  };
  const togleEdit = () => {
    setEditando(!editando);
  };

  return (
    <li className="todo-stack-small">
      <div className="c-cb">
        <input type="checkbox" />
        {editando ? (
          <input
            type="text"
            value={inputEdit}
            id="new-todo-input"
            className="input input__lg"
            name="new-todo-input"
            autoComplete="off"
            onChange={handleEdit}
          />
        ) : (
          <label className="todo-label" htmlFor="todo-0">
            {taskName}
          </label>
        )}
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={togleEdit}>
          {editando ? 'Save' : 'Edit'}
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger" onClick={deleteTask}>
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
