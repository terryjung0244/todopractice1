import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAppSelector } from "service/redux/store";
import { SELECT_TODO } from "service/const/constSelect";
import { useDispatch } from "react-redux";
import {
  deleteTodoAction,
  markAsDoneAction,
  updateTodoAction,
} from "service/redux/action/todoAction";
import { Modal } from "react-bootstrap";

export interface TodoInput {
  title: string;
  desc: string;
}

const SelectTodo = () => {
  const { SELECT, MARK_AS_DONE, MARK_AS_NOT_DONE, UPDATE, DELETE } =
    SELECT_TODO;
  const { todoList, selectIdList } = useAppSelector(
    (state) => state.todoReducer
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [updateTodo, setUpdateTodo] = useState<TodoInput>({
    title: "",
    desc: "",
  });

  const updateInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTodo({ ...updateTodo, [e.target.name]: e.target.value });
  };

  const onClickUpdate = () => {
    const { title, desc } = updateTodo;
    if (title === "" || desc === "") {
      // if (!title || !desc)
      alert("Fill in both fields");
      return;
    }
    setShowModal(false);
    dispatch(updateTodoAction({ ...updateTodo, id: selectIdList[0] }));
  };

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    switch (value) {
      case MARK_AS_DONE:
        dispatch(markAsDoneAction(true));
        break;
      case UPDATE:
        setShowModal(true);
        break;
      case DELETE:
        dispatch(deleteTodoAction());
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {todoList.length > 0 && (
        <Form.Select
          aria-label="Default select example"
          defaultValue={SELECT}
          onChange={selectOption}
        >
          <option value={SELECT} disabled hidden>
            Select
          </option>
          <option value={MARK_AS_DONE}>Mark As Done</option>
          <option value={MARK_AS_NOT_DONE}>Mark As Not Done</option>
          {selectIdList.length === 1 && <option value={UPDATE}>Update</option>}
          <option value={DELETE}>Delete</option>
        </Form.Select>
        // onChange가 실행되면 value에 의해서 {value}가 실행된다.
      )}

      {/* {showModal && ( */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <div className="modal-container">
          <h3 className="modal-title">Update Todo</h3>
          <input
            name={"title"}
            value={updateTodo.title}
            onChange={updateInputTodo}
            placeholder="Update Todo Title"
          />
          <input
            name={"desc"}
            value={updateTodo.desc}
            onChange={updateInputTodo}
            placeholder="Update Todo Desc"
          />
          <button onClick={onClickUpdate}>Update</button>
        </div>
      </Modal>
      {/* )} */}
    </div>
  );
};

export default SelectTodo;
