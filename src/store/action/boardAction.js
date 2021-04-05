export const EDIT_POSITION = "EDIT_POSITION";
export const DELETE_CARD_BOARD = "DELETE_CARD_BOARD";
export const EDIT_STATUS = "EDIT_STATUS";

export function editPositionInBoard(position) {
	return{
		type: EDIT_POSITION,
		position: position
	}
}
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