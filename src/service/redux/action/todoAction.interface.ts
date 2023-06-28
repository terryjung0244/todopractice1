import { AnyAction } from "@reduxjs/toolkit";
import { TodoType } from "model/todo";
import { TODO_CONST_ACTIONS } from "service/const/constAction";

const { CREATE_TODO_ACTION } = TODO_CONST_ACTIONS;

export interface CreateTodoReturnType {
  type: typeof CREATE_TODO_ACTION;
  payload: TodoType;
}

export type TodoActionsType = CreateTodoReturnType | AnyAction;
