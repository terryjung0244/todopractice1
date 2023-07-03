import { Reducer } from "redux";
import { TodoReducerState } from "./todoReducer.interface";
import { TodoActionsType } from "../action/todoAction.interface";
import { produce } from "immer";
import { TODO_CONST_ACTIONS } from "service/const/constAction";
import { TodoType } from "model/todo";

const {
  CREATE_TODO_ACTION,
  SEND_EACH_TODO_ID_ACTION,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
} = TODO_CONST_ACTIONS;

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
          draft.selectIdList.splice(index, 1); // ***
        }
        break;

      case UPDATE_TODO_ACTION:
        const { title, desc, id } = action.payload;

        const updateIndex: number = draft.todoList.findIndex(
          (todo: TodoType) => todo.id === id
        );
        draft.todoList[updateIndex].title = title;
        draft.todoList[updateIndex].desc = desc;
        draft.selectIdList = [];
        break;

      case DELETE_TODO_ACTION:
        const tempTodoList = [...state.todoList];
        const tempSelectIdList = [...state.selectIdList];

        tempSelectIdList.forEach((id: string) => {
          let index = tempTodoList.findIndex(
            (todo: TodoType) => id === todo.id
          );
          tempTodoList.splice(index, 1);
        });
        return {
          ...state,
          todoList: tempTodoList,
        };

      default:
        return state;
    }
  });
};
