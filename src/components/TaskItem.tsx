import React, { useState } from 'react';

interface TaskItemProps {
  taskName: string;
  deleteTask: () => void;
}

export default function TaskItem({ taskName, deleteTask }: TaskItemProps) {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <li className="todo-stack-small">
      <div className="c-cb">
        <input type="checkbox" />
        <p className="todo-p">{taskName}</p>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEdit(!edit)}>
          {edit ? 'Save' : 'Edit'}
          <span className="visually-hidden" />
        </button>
        <button type="button" className="btn btn__danger" onClick={deleteTask}>
          Delete <span className="visually-hidden" />
        </button>
      </div>
    </li>
  );
}
