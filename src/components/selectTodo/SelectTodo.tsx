import React from "react";
import Form from "react-bootstrap/Form";
import { useAppSelector } from "service/redux/store";
import { SELECT_TODO } from "service/const/constSelect";
import { useDispatch } from "react-redux";
import { markAsDoneAction } from "service/redux/action/todoAction";

const SelectTodo = () => {
  const { SELECT, MARK_AS_DONE, MARK_AS_NOT_DONE } = SELECT_TODO;
  const { todoList } = useAppSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    switch (value) {
      case MARK_AS_DONE:
        dispatch(markAsDoneAction(true));
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
          <option value="3">Update</option>
          <option value="4">Delete</option>
        </Form.Select>
        // onChange가 실행되면 value에 의해서 {value}가 실행된다.
      )}
    </div>
  );
};

export default SelectTodo;
