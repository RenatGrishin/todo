export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";

export function addCard (text){
	return {
		type: ADD_CARD,
		text: text
	}
}

export function deleteCard(id=4) {
	return{
		type: DELETE_CARD,
		id: id
	}
}
