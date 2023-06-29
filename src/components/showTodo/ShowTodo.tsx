import React from "react";
import "./ShowTodo.css";
import { TodoType } from "model/todo";
import { useAppSelector } from "service/redux/store";

const ShowTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);

  const allCheckBox = () => {};
  const eachCheckBox = () => {};

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
                      checked={true}
                      onChange={eachCheckBox}
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
