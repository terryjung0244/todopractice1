import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { produce } from "immer";
import { TODO_CONST_ACTIONS } from "service/const/constAction";

const { CREATE_TODO_ACTION } = TODO_CONST_ACTIONS;

const initialState: TodoReducerState = {
  todoList: [],
};

export const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType
) => {
  return produce(state, () => {
    switch (action.type) {
      case CREATE_TODO_ACTION:
        console.log(action.payload);
        break;
      default:
        return state;
    }
  });
};
