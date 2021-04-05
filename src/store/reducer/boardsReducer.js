import {DELETE_CARD_BOARD, EDIT_POSITION, EDIT_STATUS} from "../action/boardAction";

let initialState = {
	execute: [
		{cardID: 3, position: 0},
		{cardID: 4, position: 1},
		{cardID: 5, position: 2}
		],
	doing: [{cardID: 1, position: 0}],
	completed: [{cardID: 2, position: 0}]
}

function boardTodo (state=initialState, action){
	let copyState = {...state};
	let board = [];
	let oldBoard = [];
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
				return newBoard;
			})

			if(action.idBoard === 0) copyState.execute = newBoard;
			if(action.idBoard === 1) copyState.doing = newBoard;
			if(action.idBoard === 2) copyState.completed = newBoard;

			return copyState;

		case EDIT_STATUS:
			copyState = {...state};
			let newCard = {cardID: action.idCard, position: 0};

			if(action.oldStatus === 0) {
				oldBoard = copyState.execute.filter(key => key.cardID !== action.idCard);
				let cardPosition = 0;
				oldBoard.map(key => {newBoard.push({cardID: key.cardID, position: cardPosition}); cardPosition++; return true} );
				copyState.execute = [...newBoard];
			}
			if(action.oldStatus === 1) {
				oldBoard = copyState.doing.filter(key => key.cardID !== action.idCard);
				let cardPosition = 0;
				oldBoard.map(key => {newBoard.push({cardID: key.cardID, position: cardPosition}); cardPosition++; return true} );
				copyState.doing = [...newBoard];
			}
			if(action.oldStatus === 2) {
				oldBoard = copyState.completed.filter(key => key.cardID !== action.idCard);
				let cardPosition = 0;
				oldBoard.map(key => {newBoard.push({cardID: key.cardID, position: cardPosition}); cardPosition++; return true} );
				copyState.completed = [...newBoard];
			}
			if(action.newStatus === 0) {
				newCard.position = copyState.execute.length;
				copyState.execute.push(newCard);
			};
			if(action.newStatus === 1) {
				newCard.position = copyState.doing.length;
				copyState.doing.push(newCard);
			}
			if(action.newStatus === 2) {
				newCard.position = copyState.completed.length;
				copyState.completed.push(newCard);
			}

			return copyState;

		default: return state;
	}
}

export default boardTodo;