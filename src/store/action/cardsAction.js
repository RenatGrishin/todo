export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const STATUS_INPUT = "STATUS_INPUT";
export const CREATE_DRAFT = "CREATE_DRAFT";
export const DELETE_DRAFT = "DELETE_DRAFT";
export const EDIT_DRAFT = "EDIT_DRAFT";

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

export function createDraft(){
	return{
		type: CREATE_DRAFT
	}
}
export function deleteDraft() {
	return{
		type: DELETE_DRAFT
	}
}
export function editDraft(text) {
	return{
		type: EDIT_DRAFT,
		text: text
	}
}