import "./App.scss";
import Todo from "./components/Todo/Todo";
import AddInput from "./components/AddInput/AddInput";
import { useState } from "react";

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const addTask = (name) => {
    const newTask = { id: "id", name, completed: false };
    setTasks([tasks, newTask]);
  };
  const taskList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} />
  ));
  return (
    <div className="app">
      <h1 className="title">My Todos</h1>
      <AddInput />
      <div className="task-list">
        <ul className="todo-list">{taskList}</ul>
      </div>
    </div>
  );
};

export default App;
