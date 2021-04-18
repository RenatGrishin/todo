export const DELETE_CARD_BOARD = "DELETE_CARD_BOARD";
export const EDIT_STATUS = "EDIT_STATUS";
export const EDIT_POSITION = "EDIT_POSITION";
export const ADD_NEW_CARD_TO_BOARD = "ADD_NEW_CARD_TO_BOARD";

export function deleteCardBoard(idCard, idBoard){
	return{
		type: DELETE_CARD_BOARD,
		idCard: idCard,
		idBoard: idBoard
	}
}

export function editStatus(idCard, oldStatus, newStatus){
	return{
		type: EDIT_STATUS,
		idCard,
		oldStatus,
		newStatus
	}
}

export function editPosition(cardID, boardID, direction){
	return {
		type: EDIT_POSITION,
		cardID,
		boardID,
		direction
	}
}

export function addNewCardToBoard(cardID) {
	return{
		type: ADD_NEW_CARD_TO_BOARD,
		cardID: cardID
	}
}