import React from "react";

const Todo = (props) => {
  return (
    <li className="todo-stack">
      <input id={props.id} type="checkbox" defaultChecked={props.completed} />
      <label className="todo-lable" htmlFor={props.id}>
        {props.name}
      </label>
      <div className="edit-delete">
        <button type="button" className="edit">
          Edit<span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="delete">
          Delete<span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
};

export default Todo;
