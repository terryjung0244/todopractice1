import { TodoType } from "model/todo";
import { TODO_CONST_ACTIONS } from "service/const/constAction";
import {
  CreateTodoActionReturnType,
  markAsDoneActionReturnType,
} from "./todoAction.interface";
import { SELECT_TODO } from "service/const/constSelect";

const { CREATE_TODO_ACTION } = TODO_CONST_ACTIONS;
const { MARK_AS_DONE, MARK_AS_NOT_DONE } = SELECT_TODO;

export const createTodoAction = (
  newInput: TodoType
): CreateTodoActionReturnType => {
  return {
    type: CREATE_TODO_ACTION,
    payload: newInput,
  };
};

export const markAsDoneAction = (
  select: boolean
): markAsDoneActionReturnType => {
  return {
    type: MARK_AS_DONE,
    payload: select,
  };
};
