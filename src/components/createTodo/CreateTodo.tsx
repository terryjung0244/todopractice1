import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NewCreateTodoInput } from "./Create.interface";

const CreateTodo = () => {
  const [newTodoInput, setNewTodoInput] = useState<NewCreateTodoInput>({
    title: "",
    desc: "",
  });

  const createNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoInput({ ...newTodoInput, [e.target.name]: e.target.value });
  };

  console.log(newTodoInput);
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>New Todo</InputGroup.Text>
        <Form.Control
          aria-label="Title"
          name="title"
          value={newTodoInput.title}
          placeholder="Title"
          onChange={createNewTodo}
        />
        <Form.Control
          aria-label="Desc"
          name="desc"
          value={newTodoInput.desc}
          placeholder="Title"
          onChange={createNewTodo}
        />
      </InputGroup>
    </div>
  );
};

export default CreateTodo;
