import React, { useState } from "react";
import "./Create.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { NewCreateTodoInput } from "./Create.interface";
import { useAppDispatch } from "service/redux/store";
import { createTodoAction } from "service/redux/action/todoAction";
import { getNanoid } from "service/util/nanoid";

// import Alert from "react-bootstrap/Alert";

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [newTodoInput, setNewTodoInput] = useState<NewCreateTodoInput>({
    title: "",
    desc: "",
  });

  const createNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoInput({ ...newTodoInput, [e.target.name]: e.target.value });
  };

  const createTodoSubmit = () => {
    const { title, desc } = newTodoInput;
    if (!title && !desc) {
      // <>
      //   {[
      //     "primary",
      //     "secondary",
      //     "success",
      //     "danger",
      //     "warning",
      //     "info",
      //     "light",
      //     "dark",
      //   ].map((variant) => (
      //     <Alert key={variant} variant={variant}>
      //       This is a {variant} alert—check it out!
      //     </Alert>
      //   ))}
      // </>;
      alert("Hello");
      return;
    }

    dispatch(createTodoAction({ ...newTodoInput, id: getNanoid() }));
    setNewTodoInput({ ...newTodoInput, title: "", desc: "" });
  };

  return (
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
  );
};

export default CreateTodo;
