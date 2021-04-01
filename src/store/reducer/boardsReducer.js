import {DELETE_CARD_BOARD, EDIT_POSITION} from "../action/boardAction";

let initialState = {
	execute: [
		{id: 5, cardID: 3, position: 0},
		{id: 9, cardID: 4, position: 1},
		{id: 10, cardID: 5, position: 2}
		],
	doing: [{id: 6, cardID: 1, position: 0}],
	completed: [{id: 7, cardID: 2, position: 0}]
}

function boardTodo (state=initialState, action){
	let copyState = {...state};
	let board = [];
	let newBoard = [];
	switch (action.type) {
		case EDIT_POSITION:
			return state;

		case DELETE_CARD_BOARD:
			if(action.idBoard === 0)board = [...copyState.execute];
			if(action.idBoard === 1)board = [...copyState.doing];
			if(action.idBoard === 2)board = [...copyState.completed];

			board.map(key => {
				if(key.cardID < action.idCard) newBoard.push(key);
				if(key.cardID > action.idCard){
					key.position -= 1;
					newBoard.push(key);
				}
			})

			if(action.idBoard === 0) copyState.execute = newBoard;
			if(action.idBoard === 1) copyState.doing = newBoard;
			if(action.idBoard === 2) copyState.completed = newBoard;

			return copyState;

		default: return state;
	}
}

export default boardTodo;