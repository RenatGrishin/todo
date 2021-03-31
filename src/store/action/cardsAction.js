export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const STATUS_INPUT = "STATUS_INPUT";

export function addCard (text){
	return {
		type: ADD_CARD,
		text: text
	}
}

export function deleteCard(id) {
	return{
		type: DELETE_CARD,
		id: id
	}
}

export function editCard(text, id){
	return{
		type: EDIT_CARD,
		text: text,
		id: id
	}
}

export function statusInput(id) {
	return{
		type: STATUS_INPUT,
		id: id
	}
}