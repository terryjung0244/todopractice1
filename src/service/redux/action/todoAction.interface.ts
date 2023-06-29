import { AnyAction } from "@reduxjs/toolkit";
import { TodoType } from "model/todo";
import { TODO_CONST_ACTIONS } from "service/const/constAction";
import { SELECT_TODO } from "service/const/constSelect";

const { MARK_AS_DONE, MARK_AS_NOT_DONE } = SELECT_TODO;
const { CREATE_TODO_ACTION } = TODO_CONST_ACTIONS;

export interface CreateTodoActionReturnType {
  type: typeof CREATE_TODO_ACTION;
  payload: TodoType;
}

export interface markAsDoneActionReturnType {
  type: typeof MARK_AS_DONE;
  payload: boolean;
}

export type TodoActionsType =
  | CreateTodoActionReturnType
  | markAsDoneActionReturnType
  | AnyAction;
