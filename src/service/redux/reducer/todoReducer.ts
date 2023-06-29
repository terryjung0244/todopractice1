import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { produce } from "immer";
import { TODO_CONST_ACTIONS } from "service/const/constAction";
import { SELECT_TODO } from "service/const/constSelect";

const { CREATE_TODO_ACTION, SEND_EACH_TODO_ID_ACTION } = TODO_CONST_ACTIONS;
const { MARK_AS_DONE } = SELECT_TODO;

const initialState: TodoReducerState = {
  todoList: [],
  selectIdList: [],
};

export const todoReducer: Reducer<TodoReducerState, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TODO_ACTION:
        draft.todoList.push(action.payload);
        break;

      case SEND_EACH_TODO_ID_ACTION:
        const index = draft.selectIdList.indexOf(action.payload);

        if (index === -1) {
          draft.selectIdList.push(action.payload);
        } else {
          draft.selectIdList.slice(index, 1);
        }
        break;

      case MARK_AS_DONE:
        break;
      default:
        return state;
    }
  });
};
