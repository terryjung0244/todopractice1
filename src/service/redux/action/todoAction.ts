import { TodoType } from "model/todo";
import { TODO_CONST_ACTIONS } from "service/const/constAction";
import {
  CreateTodoActionReturnType,
  DeleteTodoActionReturnType,
  MarkAsDoneActionReturnType,
  UpdateTodoActionReturnType,
  sendEachTodoIdActionReturnType,
} from "./todoAction.interface";

const {
  CREATE_TODO_ACTION,
  SEND_EACH_TODO_ID_ACTION,
  SEND_EACH_TODO_ALL_ACTION,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  MARK_AS_DONE_ACTION,
} = TODO_CONST_ACTIONS;

export const createTodoAction = (
  newInput: TodoType
): CreateTodoActionReturnType => {
  return {
    type: CREATE_TODO_ACTION,
    payload: newInput,
  };
};

export const sendEachTodoIdAction = (
  selectId: string
): sendEachTodoIdActionReturnType => {
  return {
    type: SEND_EACH_TODO_ID_ACTION,
    payload: selectId,
  };
};

export const markAsDoneAction = (
  select: boolean
): MarkAsDoneActionReturnType => {
  return {
    type: MARK_AS_DONE_ACTION,
    payload: null,
  };
};

export const updateTodoAction = (
  updateInput: Partial<TodoType>
): UpdateTodoActionReturnType => {
  return {
    type: UPDATE_TODO_ACTION,
    payload: updateInput,
  };
};

export const deleteTodoAction = (): DeleteTodoActionReturnType => {
  return {
    type: DELETE_TODO_ACTION,
    payload: null,
  };
};
