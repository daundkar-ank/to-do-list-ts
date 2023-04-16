import React, { FC, ChangeEvent, useState } from "react";
import "../App.css";
import TodoTask from "./ToDoTask";
import { ITask } from "./Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { LIST, addNewTask } from "./taskSlice";

const ToDoList: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const dispatch = useDispatch();
  const TODOLIST = useSelector(LIST);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
    dispatch(addNewTask([...todoList, newTask]));
  };

  const completeTask = (taskNameToDelete: string): void => {
    const temp = todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    });
    setTodoList(temp);
    dispatch(addNewTask(temp));
  };

  return (
    <div className="App">
      <h3>To Do</h3>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {TODOLIST.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
