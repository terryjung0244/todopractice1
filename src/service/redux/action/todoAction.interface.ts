import { AnyAction } from "@reduxjs/toolkit";
import { TodoType } from "model/todo";
import { TODO_CONST_ACTIONS } from "service/const/constAction";

const {
  CREATE_TODO_ACTION,
  SEND_EACH_TODO_ID_ACTION,
  SEND_EACH_TODO_ALL_ACTION,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  MARK_AS_DONE_ACTION,
} = TODO_CONST_ACTIONS;

export interface CreateTodoActionReturnType {
  type: typeof CREATE_TODO_ACTION;
  payload: TodoType;
}

export interface sendEachTodoIdActionReturnType {
  type: typeof SEND_EACH_TODO_ID_ACTION;
  payload: string;
}

export interface UpdateTodoActionReturnType {
  type: typeof UPDATE_TODO_ACTION;
  payload: Partial<TodoType>;
}

export interface DeleteTodoActionReturnType {
  type: typeof DELETE_TODO_ACTION;
  payload: null;
}

export interface MarkAsDoneActionReturnType {
  type: typeof MARK_AS_DONE_ACTION;
  payload: null;
}

export type TodoActionsType =
  | CreateTodoActionReturnType
  | sendEachTodoIdActionReturnType
  | UpdateTodoActionReturnType
  | DeleteTodoActionReturnType
  | AnyAction;
