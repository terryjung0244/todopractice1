import { TodoType } from "model/todo";
import { TODO_CONST_ACTIONS } from "service/const/constAction";
import { CreateTodoReturnType } from "./todoAction.interface";

const { CREATE_TODO_ACTION } = TODO_CONST_ACTIONS;

export const createTodoAction = (newInput: TodoType): CreateTodoReturnType => {
  return {
    type: CREATE_TODO_ACTION,
    payload: newInput,
  };
};
