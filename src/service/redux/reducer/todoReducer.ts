import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { produce } from "immer";

const initialState: TodoReducerState = {
  todoList: [],
};

export const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType
) => {
  return produce(state, () => {
    switch (action.type) {
      default:
        return state;
    }
  });
};
