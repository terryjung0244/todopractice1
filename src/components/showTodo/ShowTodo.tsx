import React from "react";
import "./ShowTodo.css";
import { TodoType } from "model/todo";
import { useAppDispatch, useAppSelector } from "service/redux/store";
import { sendEachTodoIdAction } from "service/redux/action/todoAction";

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, selectIdList } = useAppSelector(
    (state) => state.todoReducer
  );

  const allCheckBox = () => {};
  const eachCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      dispatch(sendEachTodoIdAction(value));
    }
  };

  console.log(todoList);

  return (
    <div className="tableDivMain">
      {todoList.length > 0 && (
        <table className="tableMain">
          <thead className="theadMain">
            <tr>
              <th>
                <input type="checkbox" checked={true} onChange={allCheckBox} />
              </th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="tbodyMain">
            {todoList.map((todo: TodoType) => {
              return (
                <tr key={todo.id}>
                  <td>
                    <input
                      type="checkbox"
                      value={todo.id}
                      onChange={eachCheckBox}
                      checked={selectIdList.includes(todo.id)}
                    />
                    {todo.id}
                  </td>
                  <td>{todo.title}</td>
                  <td>{todo.desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowTodo;
