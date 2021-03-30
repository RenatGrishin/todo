import {combineReducers, createStore} from "redux";
import cardsTodo from "./reducer/cardsReducer";
import boardTodo from "./reducer/boardsReducer";

let reducerTodo = combineReducers({cardsTodo, boardTodo});
let store = createStore(reducerTodo);

export default store;