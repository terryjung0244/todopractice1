import React, { useState } from "react";
import "./Create.css";
import { Form, InputGroup, Button, Alert } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
import { NewCreateTodoInput } from "./Create.interface";
import { useAppDispatch } from "service/redux/store";
import { createTodoAction } from "service/redux/action/todoAction";
import { getNanoid } from "service/util/nanoid";

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [newTodoInput, setNewTodoInput] = useState<NewCreateTodoInput>({
    title: "",
    desc: "",
  });
  const [inputValidation, setInputValidation] = useState<boolean>(false);

  const createNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoInput({ ...newTodoInput, [e.target.name]: e.target.value });
  };

  const createTodoSubmit = () => {
    const { title, desc } = newTodoInput;
    if (!title && !desc) {
      setInputValidation(true);
      // alert("Hello");
      return;
    }
    setInputValidation(false);

    dispatch(createTodoAction({ ...newTodoInput, id: getNanoid() }));
    setNewTodoInput({ ...newTodoInput, title: "", desc: "" });
  };

  return (
    <>
      {/* Validation Error */}
      {inputValidation && (
        <Alert variant="danger" className="input-validation-alert">
          Please input both fields
        </Alert>
      )}

      <div className="createTodo-main">
        <InputGroup className="input-main">
          {/* <InputGroup.Text></InputGroup.Text> */}
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
            placeholder="Description"
            onChange={createNewTodo}
          />
        </InputGroup>
        <Button variant="dark" onClick={createTodoSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default CreateTodo;
