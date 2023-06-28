import React, { useState } from "react";
import "./Create.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { NewCreateTodoInput } from "./Create.interface";
// import { TODO_CONST_ACTIONS } from "../../service/const/constAction";
import { useAppDispatch } from "service/redux/store";
import { createTodoAction } from "service/redux/action/todoAction";

// const { CREATE_TODO_ACTION } = TODO_CONST_ACTIONS;

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [newTodoInput, setNewTodoInput] = useState<NewCreateTodoInput>({
    title: "",
    desc: "",
  });

  const createNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { title, desc } = newTodoInput;
    // if (!title && desc) {
    //   <>
    //     {["primary"].map((variant) => (
    //       <Alert key={variant} variant={variant}>
    //         This is a {variant} alert—check it out!
    //       </Alert>
    //     ))}
    //   </>;
    // }
    setNewTodoInput({ ...newTodoInput, [e.target.name]: e.target.value });
  };

  const createTodoSubmit = () => {
    dispatch(createTodoAction(newTodoInput));
  };

  return (
    <div className="createTodo-main">
      <InputGroup className="input-main">
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
          placeholder="Description"
          onChange={createNewTodo}
        />
      </InputGroup>
      <Button variant="dark" onClick={createTodoSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default CreateTodo;
