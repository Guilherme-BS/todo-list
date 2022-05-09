import React, { useContext } from 'react';
import { useTodoContext } from '../context/TodoContext';
import { ITask } from '../types';

interface TaskItemProps {
  task: ITask;
}

export default function TaskItem({
  task: { value, id, checked },
}: TaskItemProps) {
  const { deleteTask, startEditing, editTask, handleCheck, editingIdValue } =
    useTodoContext();
  return (
    <li className="todo-stack-small">
      <div className="c-cb">
        <input
          type="checkbox"
          onChange={() => handleCheck(id)}
          checked={checked}
        />
        <label className="todo-p">{value}</label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={
            editingIdValue === id
              ? () => editTask(id)
              : () => startEditing(id, value)
          }
        >
          {editingIdValue === id ? 'Save' : 'Edit'}
          <span className="visually-hidden" />
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
        >
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
