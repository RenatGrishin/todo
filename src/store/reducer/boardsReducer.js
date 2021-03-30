import {EDIT_POSITION} from "../action/boardAction";

let initialState = {
	execute: [{id: 5, cardID: 3, position: 0}, {id: 9, cardID: 4, position: 1}, {id: 10, cardID: 5, position: 2}],
	doing: [{id: 6, cardID: 1, position: 0}],
	completed: [{id: 7, cardID: 2, position: 0}]
}

function boardTodo (state=initialState, action){
	switch (action.type) {
		case EDIT_POSITION:
			return state;
		default: return state;
	}
}

export default boardTodo;