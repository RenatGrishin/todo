export const EDIT_POSITION = "EDIT_POSITION";
export const DELETE_CARD_BOARD = "DELETE_CARD_BOARD";

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