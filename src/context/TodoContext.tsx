import React, { createContext, useMemo, useState, useContext } from 'react';
import { ITask } from '../types';

type TodoContextProps = {
  children: React.ReactNode;
};

type TodoContextType = {
  inputValue: string;
  editingIdValue: string;
  taskList: ITask[];
  setTaskList: (value: ITask[]) => void;
  setEditingIdValue: (vale: string) => void;
  addTask: (task: string, newKey: string) => void;
  startEditing: (id: string, task: string) => void;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  handleCheck: (id: string) => void;
  setInputValue: (value: string) => void;
};
const initialValue = {
  inputValue: '',
  editingIdValue: '',
  taskList: [],
  setTaskList: () => {},
  setEditingIdValue: () => {},
  addTask: () => {},
  startEditing: () => {},
  editTask: () => {},
  deleteTask: () => {},
  handleCheck: () => {},
  setInputValue: () => {},
};
export const TodoContext = createContext<TodoContextType>(initialValue);
export function TodoContextProvider({ children }: TodoContextProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [taskList, setTaskList] = useState<ITask[]>(initialValue.taskList);
  const [editingIdValue, setEditingIdValue] = useState<string>(
    initialValue.editingIdValue,
  );

  const addTask = (task: string, newKey: string): void => {
    setTaskList([...taskList, { value: task, id: newKey, checked: false }]);
  };

  const startEditing = (id: string, task: string) => {
    setEditingIdValue(id);
    setInputValue(task);
  };

  const editTask = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, value: inputValue };
        }
        return task;
      }),
    );
    setInputValue('');
    setEditingIdValue('');
  };

  const deleteTask = (id: string) => {
    setTaskList(taskList.filter((taskObject) => taskObject.id !== id));
  };

  const handleCheck = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      }),
    );
  };

  const dataTodo = useMemo(() => {
    return {
      inputValue,
      editingIdValue,
      taskList,
      setTaskList,
      setEditingIdValue,
      addTask,
      startEditing,
      editTask,
      deleteTask,
      handleCheck,
      setInputValue,
    };
  }, [inputValue, taskList, editingIdValue]);
  return (
    <TodoContext.Provider value={dataTodo}>{children}</TodoContext.Provider>
  );
}
export function useTodoContext() {
  return useContext(TodoContext);
}
