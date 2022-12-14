import React, { useState } from "react";

const AddInput = (props) => {
  const [name, setName] = useState("");

  const handleChange = (input) => {
    setName(input.target.value);
  };
  const handleSubmit = (input) => {
    input.preventDefault();
    props.addTask(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-input">
        <input
          type="text"
          id="todo-input"
          className="input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn-submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddInput;
