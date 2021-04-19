import {
	ADD_CARD,
	CREATE_DRAFT,
	DELETE_CARD,
	DELETE_DRAFT,
	EDIT_CARD,
	EDIT_DRAFT,
	STATUS_INPUT
} from "../action/cardsAction";
let initialState = {
	cards: [
		{id: 1, text: "Создать todo приложение", edit:false},
		{id: 2, text: "Использовать в приложении Redux", edit:false},
		{id: 3, text: "Узнать рецепт скумы", edit:false},
		{id: 4, text: "Не мочить водой кота и не кормить после полуночи!", edit:false},
		{id: 5, text: "Тут могла быть ваша задача", edit:false}
	],
	draftCard: {id: 0, text: "", edit:false}
};

function cardsTodo (state=initialState, action){
	let copyState = {...state};
	let elementIndex;
	let element;
	switch (action.type) {
		case ADD_CARD:
			copyState.cards = [...state.cards];
			copyState.cards.push(copyState.draftCard);

			return copyState;

		case DELETE_CARD:
			let newCardsList = state.cards.filter(key => key.id !== action.id);
			copyState.cards = newCardsList;
			return copyState;

		case EDIT_CARD:
			copyState.cards = [...state.cards];
			elementIndex = copyState.cards.findIndex(key => key.id === action.id);
			element = copyState.cards[elementIndex];
			element.text = action.text;
			copyState.cards[elementIndex] = element;
			return copyState;

		case STATUS_INPUT:
			copyState.cards = [...state.cards];
			elementIndex = copyState.cards.findIndex(key => key.id === action.id);
			element = copyState.cards[elementIndex];
			element.edit = !element.edit;
			return copyState;

		case CREATE_DRAFT:
			copyState.draftCard = {...state.draftCard};
			let lastCardID = 1;
			copyState.cards.map(key => {
				if(key.id === lastCardID ) lastCardID = key.id + 1;
				if( key.id > lastCardID ) lastCardID = key.id + 1;
				return true;
			});
			copyState.draftCard = {id: lastCardID, text: "", edit: false};
			return copyState;

		case DELETE_DRAFT:
			copyState.draftCard = {id: 0, text: "", edit: false};
			return copyState;

		case EDIT_DRAFT:
			copyState.draftCard = {...state.draftCard}
			let draftEdit = {...copyState.draftCard};
			draftEdit.text = action.text;
			copyState.draftCard = draftEdit;
			return copyState;

		default: return state;
	}
}export default cardsTodo;